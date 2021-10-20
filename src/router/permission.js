import router from '@/router'
import store from '@/store'
import Cookie from 'js-cookie'
import { allowlist } from '@/router/auth-list'
import { langMap } from '@/router/lang-map'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ElMessage } from 'element-plus'

NProgress.configure({
  showSpinner: false
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  document.title = `${to.meta.title || ''} - 信永中和`

  console.log('😄😄😄 ', to)

  const currentRouteLang = to.params.lang

  if (
    allowlist.find(
      name => to.name === name
    )
  ) {
    next()
    return
  }

  // console.log('from.matched：', from.matched)

  // 获取用户信息
  const { data, error } = await store.dispatch('UserAccount/getUserInfo')

  if (error) {
    store.dispatch('UserAccount/setLanguage', {
      lang: currentRouteLang || data.language
    })
    Cookie.remove('token')
    Cookie.remove('name')
    next('/en/user/login')
    return
  }

  if (data.user.username && Cookie.get('name') === data.user.username) {
    // TODO: 需要配合后端 response 中的 language 一起使用
    store.dispatch('UserAccount/setLanguage', {
      lang: currentRouteLang || data.language
    })
    next()
    return
  }

  ElMessage.error('登录失败，请重新登录')
  Cookie.remove('token')
  Cookie.remove('name')
  store.dispatch('UserAccount/setLanguage', {
    lang: currentRouteLang || store.state.UserAccount.lang
  })
  next(`/${currentRouteLang || store.state.UserAccount.lang}/user/login`)
})

router.afterEach((to) => {
  NProgress.done()
})
