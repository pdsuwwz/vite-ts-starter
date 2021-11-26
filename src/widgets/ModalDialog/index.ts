import { App, createVNode, render, nextTick, AppContext, RendererElement, RendererNode, VNode, ComponentPublicInstance, VNodeProps } from 'vue'
import Modal from '@/widgets/ModalDialog/modal.vue'

declare module 'vue' {
  export interface VNode {
    destroy?: any
  }
}

const extractData = (options: { renderComponent: any; }) => {
  const extractSlotComponents = (renderComponent: { component?: any; data?: any; }) => {
    const component: any = {}
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
  install (app: App<any>) {
    app.config.globalProperties.$ModalDialog = function (options: any) {
      const {
        component,
        componantData
      } = extractData(options)

      let vm: VNode | null = createVNode(
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

      let container: HTMLDivElement | null = document.createElement('div')

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
      if (container.firstElementChild) {
        document.body.appendChild(container.firstElementChild)
      }

      nextTick(() => {
        if (!vm) return

        if (vm.component && vm.component.proxy) {
          (
            vm.component.proxy as ComponentPublicInstance<{
              visible: boolean
            }>
          ).visible = true
        }
      })

      return vm
    }
  }
}
