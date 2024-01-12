import { setupRouter } from '@/router'

import { setupStore } from '@/store'

import App from './App.vue'

import ElementPlus from 'element-plus'

import Fonts from '@/assets/fonts'

import GlobalComponents from '@/components'
import Mixin from './mixins'
import Widgets from './widgets'

const app = createApp(App)

function setupPlugins() {
  app
    .use(ElementPlus)
    .use(GlobalComponents)
    .use(Widgets)
    .use(Fonts)
    .mixin(Mixin)
}

async function setupApp() {
  setupRouter(app)
  setupStore(app)
  app.mount('#app')
}

setupPlugins()

setupApp()

export default app
