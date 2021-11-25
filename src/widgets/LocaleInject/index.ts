
import { useLocaleInject } from 'element-plus'

export default {
  install (app) {
    app.config.globalProperties._t = function (str) {
      return useLocaleInject().t(str)
    }
  }
}
