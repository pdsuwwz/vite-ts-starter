
import { useLocaleInject } from 'element-plus'

export default {
  install (app: import('vue').App<any>) {
    app.config.globalProperties._t = function (str: string) {
      return useLocaleInject().t(str)
    }
  }
}
