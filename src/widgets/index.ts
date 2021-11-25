import ModalDialog from '@/widgets/ModalDialog'
import LocaleInject from '@/widgets/LocaleInject'

export default {
  install (app) {
    app.use(ModalDialog)
    app.use(LocaleInject)
  }
}
