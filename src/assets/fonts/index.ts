import FontAwesome from '@/assets/fonts/fontawesome'
import '@/assets/fonts/iconfont'

export default {
  install (app: import('vue').App<any>) {
    app.use(FontAwesome)
  }
}
