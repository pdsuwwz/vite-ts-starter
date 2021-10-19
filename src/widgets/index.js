// import ModalWrapper from '@/widgets/ModalWrapper'
// import ModalPrompt from '@/widgets/ModalPrompt'
import ModalWrapper from '@/widgets/ModalWrapper'
import ModalPrompt from '@/widgets/ModalPrompt'
import ModalDialog from '@/widgets/ModalDialog'
import useLocaleInject from '@/widgets/useLocaleInject'

export default {
  install (Vue) {
    Vue.use(ModalWrapper)
    Vue.use(ModalPrompt)
    Vue.use(ModalDialog)
    Vue.use(useLocaleInject)
  }
}
