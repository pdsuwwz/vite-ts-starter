import router from '@/router'
import store from '@/store'
import Cookie from 'js-cookie'
import { allowlist } from '@/router/auth-list'
import { systemTitle } from '@/locales/data'

import NProgress from 'nprogress'

NProgress.configure({
  showSpinner: false
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  document.title = `${to.meta.title || ''} - ${systemTitle}`

  console.log('😄😄😄 ', to)

  const currentRouteLocale = to.params.locale

  if (
    allowlist.find(
      name => to.name === name
    )
  ) {
    next()
    return
  }

  // 获取用户信息
  const { data, error } = await store.dispatch('UserAccount/getUserInfo')

  if (error) {
    store.dispatch('UserAccount/setLanguage', {
      locale: currentRouteLocale || data.language
    })
    Cookie.remove('token')
    Cookie.remove('name')
    next('/en/user/login')
    return
  }

  if (data.user.username && Cookie.get('name') === data.user.username) {
    // TODO: It must be used together with the backend
    store.dispatch('UserAccount/setLanguage', {
      locale: currentRouteLocale || data.language
    })
    next()
    return
  }

  // ElMessage.error('登录失败，请重新登录')
  Cookie.remove('token')
  Cookie.remove('name')
  store.dispatch('UserAccount/setLanguage', {
    locale: currentRouteLocale || store.state.UserAccount.locale
  })
  next(`/${currentRouteLocale || store.state.UserAccount.locale}/user/login`)
})

router.afterEach((to) => {
  NProgress.done()
})
