import { defineComponent } from 'vue'

// import Modal from '@/widgets/ModalWrapper/modal.vue'
// import { modalCallbackList } from '@/widgets/ModalWrapper/data'
import Modal from '@/widgets/ModalWrapper/modal.vue'
// import Modal from './modal.vue'
import { modalCallbackList } from './data'

let instance = null

// 提取 options 中配置的回调方法
const extractCallbackFunction = (options) => {
  const fnList = {}
  modalCallbackList.forEach((fnName) => {
    fnList[fnName] = options[fnName] || function () {}
  })
  return fnList
}

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
  const callbackList = extractCallbackFunction(options)
  return {
    component,
    componantData,
    callbackList
  }
}

// 移除处理过的方法和变量，不至于污染 el-dialog 的 props
const removeNeedlessOptions = (options) => {
  delete options.renderComponent
  modalCallbackList.forEach((fnName) => {
    delete options[fnName]
  })
}

const defaultData = {
  width: '550px',
  // 弹窗中内容 (字符串)
  content: '',
  // 是否表单化，为 true 时则会隐藏 footer，并添加默认样式
  formization: false,
  // 隐藏 footer
  hideFooter: false,
  // 隐藏取消按钮
  hideCancel: false,
  // 隐藏确定按钮
  hideConfirm: false,
  // 上下边距
  top: '30vh'
}

export default {
  install (Vue) {
    const ModalWrapper = defineComponent(Modal)

    Vue.config.globalProperties.$modalWrapper = function (options) {
      const {
        component,
        componantData,
        callbackList
      } = extractData(options)

      removeNeedlessOptions(options)
      instance = new ModalWrapper({
        parent: this,
        propsData: {
          ...Object.assign({}, defaultData, options)
        },
        data: {
          componantData,
          callbackList
        },
        components: component
      })

      instance.vm = instance.$mount()
      document.body.appendChild(instance.vm.$el)
      instance.vm.visible = true
      return instance.vm
    }
  }
}
