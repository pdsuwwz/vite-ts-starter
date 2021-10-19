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

  if (
    allowlist.find(
      name => to.name === name
    )
  ) {
    next()
    return
  }

  console.log('啦啦啦啦', from.matched)

  // 获取用户信息
  const { data, error } = await store.dispatch('UserAccount/getUserInfo')

  if (error) {
    store.dispatch('UserAccount/setLanguage', {
      lang: data.language
    })
    Cookie.remove('token')
    Cookie.remove('name')
    next('/en/user/login')
    return
  }

  if (data.user.username && Cookie.get('name') === data.user.username) {
    store.dispatch('UserAccount/setLanguage', {
      lang: data.language
    })
    next()
    return
  }

  ElMessage.error('登录失败，请重新登录')
  Cookie.remove('token')
  Cookie.remove('name')
  store.dispatch('UserAccount/setLanguage', {
    lang: 'en'
  })
  next('/en/user/login')
})

router.afterEach((to) => {
  NProgress.done()
})
