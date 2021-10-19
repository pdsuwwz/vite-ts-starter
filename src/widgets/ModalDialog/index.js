import { createVNode, render, nextTick, ref } from 'vue'
import Modal from '@/widgets/ModalDialog/modal.vue'

// 提取 data 中的变量
const extractData = (options) => {
  // 提取需要注入的组件和数据
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
  // 组件祖册
  install (app) {
    app.config.globalProperties.$ModalDialog = function (options) {
      // const modelDom = document.body.querySelector('.container_dialog')
      // if (modelDom) {
      //   document.body.removeChild(modelDom)
      // }

      const {
        component,
        componantData
      } = extractData(options)

      nextTick(() => {
        vm.component.proxy.visible = true
      })
      let container = document.createElement('div')
      container.className = 'container_dialog'
      // 创建虚拟节点
      let vm = createVNode(
        Modal,
        // options
        {
          ...options,
          componantData,
          components: component
        }
      )
      // console.log(componantData)
      for (const name in component) {
        app.component(name, component[name])
      }

      vm.destroy = () => {
        if (container) render(null, container)
        container = null
        vm = null
        for (const name in component) {
          delete app._context.components[name]
        }
      }

      // TODO: important!!!!!  （上下文）
      vm.appContext = app._context

      // 渲染虚拟节点
      render(vm, container)
      document.body.appendChild(container.firstElementChild)
    }
  }
}
