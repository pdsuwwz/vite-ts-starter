import childrenRoutes from '@/router/child-routes'
import { localeMap } from '@/router/locale-map'
import { isUndefined } from '@/utils/type'

const Layout = () => import('@/components/Layout/index.vue')

// Creates regex (zh_CN|en)
function getLocaleRegex () {
  let reg = ''
  const localeList = Object.keys(localeMap)
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
    path: `/:locale${getLocaleRegex()}?`,
    component: Layout,
    beforeEnter (to, from, next) {
      console.log('beforeEnter: to ', to)
      if (localeMap[to.params.locale] && !isUndefined(to.params.pathMatch)) {
        next(`/${to.params.locale}/project`)
        return
      }
      next()
    },
    children: [
      {
        path: '',
        name: 'LangRoot',
        redirect: {
          name: 'Project'
        }
      },
      ...childrenRoutes
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/components/404.vue')
  }
]

export default routes
