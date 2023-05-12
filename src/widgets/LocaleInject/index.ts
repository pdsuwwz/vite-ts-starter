
import { useLanguage } from '@/hooks/useLanguage'
import { useLocale } from 'element-plus'

export default {
  install (app: import('vue').App<any>) {
    app.config.globalProperties._t = function (str: string) {
      const { currentLocaleLang } = useLanguage()
      const { t } = useLocale(currentLocaleLang)
      return t(str)
    }
  }
}
