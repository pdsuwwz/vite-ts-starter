import { defineComponent } from 'vue'
// import Modal from '@/widgets/ModalPrompt/modal.vue'
import Modal from './modal.vue'

let instance = {}

export default {
  install (Vue) {
    const ModalWrapper = defineComponent(Modal)

    Vue.config.globalProperties.$ModalPrompt = function ({
      icon = 'warning',
      confirmType = 'danger',
      title = '提示',
      content = '内容文字',
      textClose = '取消',
      textConfirm = '确定',
      onClose = () => {},
      onConfirm = () => {}
    } = {}) {
      instance = new ModalWrapper({
        parent: this,
        data: {
          visible: false
        },
        propsData: {
          icon,
          confirmType,
          title,
          content,
          textClose,
          textConfirm,
          onClose,
          onConfirm
        }
      })
      instance.vm = instance.$mount()
      document.body.appendChild(instance.vm.$el)
      instance.vm.visible = true
      return instance.vm
    }
  }
}
