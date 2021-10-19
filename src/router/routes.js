import childrenRoutes from '@/router/child-routes'
import { langMap } from '@/router/lang-map'
import { isUndefined } from '@/utils/type'

const Layout = () => import('@/components/Layout/index.vue')

// Creates regex (zh_CN|en)
function getLocaleRegex () {
  let reg = ''
  const localeList = Object.keys(langMap)
  localeList.forEach((localeItem, index) => {
    const line = index !== localeList.length - 1 ? '|' : ''
    reg = `${reg}${localeItem}${line}`
  })
  return `(${reg})`
}

const routes = [
  {
    path: '/',
    name: 'Root',
    redirect: '/project'
  },
  {
    path: `/:lang${getLocaleRegex()}?`,
    name: 'LangRoot',
    component: Layout,
    beforeEnter (to, from, next) {
      console.log('to', to)
      if (langMap[to.params.lang] && !isUndefined(to.params.pathMatch)) {
        next('/')
        return
      }
      next()
    },
    children: [
      ...childrenRoutes,
      {
        path: ':pathMatch(.*)*',
        name: '404',
        component: () => import('@/components/404.vue')
      }
    ]
  }
]

export default routes
