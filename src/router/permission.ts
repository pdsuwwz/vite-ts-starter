import { store } from '@/store'
import Cookie from 'js-cookie'
import { allowlist } from '@/router/auth-list'
import { systemTitle } from '@/locales/data'

import NProgress from 'nprogress'
import { Router } from 'vue-router'

NProgress.configure({
  showSpinner: false
})

export function createRouterGuards(router: Router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start()

    document.title = `${to.meta.title || ''} - ${systemTitle}`

    globalThis.console.log('😄😄😄 ', to)

    const currentRouteLocale = to.params.locale

    if (
      allowlist.find(
        name => to.name === name
      )
    ) {
      next()
      return
    }

    if (!Cookie.get('token')) {
      next(`/${currentRouteLocale || store.state.UserAccount.locale}/user/login`)
      return
    }

    // 获取用户信息
    const { data, error } = await store.dispatch('UserAccount/getUserInfo')

    if (error) {
      store.dispatch('UserAccount/setLanguage', {
        locale: currentRouteLocale || data.language || store.state.UserAccount.locale
      })
      Cookie.remove('token')
      next(`/${currentRouteLocale || store.state.UserAccount.locale}/user/login`)
      return
    }

    // TODO: It must be used together with the backend
    store.dispatch('UserAccount/setLanguage', {
      locale: currentRouteLocale || data.language
    })
    next()
  })

  router.afterEach((to) => {
    NProgress.done()
  })
}

