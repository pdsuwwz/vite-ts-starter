import { createVNode, render, nextTick } from 'vue'
import Modal from '@/widgets/ModalDialog/modal.vue'

const extractData = (options) => {
  const extractSlotComponents = (renderComponent) => {
    const component = {}
    let componantData = {}

    if (renderComponent) {
      const { data } = renderComponent
      componantData = data
      component[renderComponent.component.name] = renderComponent.component
    }

    return {
      component,
      componantData
    }
  }

  const { component, componantData } = extractSlotComponents(options.renderComponent)
  return {
    component,
    componantData
  }
}

export default {
  install (app) {
    app.config.globalProperties.$ModalDialog = function (options) {
      const {
        component,
        componantData
      } = extractData(options)

      let vm = createVNode(
        Modal,
        {
          ...options,
          componantData,
          components: component
        }
      )
      for (const name in component) {
        app.component(name, component[name])
      }

      let container = document.createElement('div')

      // https://stackoverflow.com/questions/65163775/how-to-destroy-unmount-vue-js-3-components
      vm.destroy = () => {
        if (container) render(null, container)
        container = null
        vm = null
        for (const name in component) {
          delete app._context.components[name]
        }
      }

      vm.appContext = app._context

      render(vm, container)
      document.body.appendChild(container.firstElementChild)

      nextTick(() => {
        vm.component.proxy.visible = true
      })

      return vm
    }
  }
}
