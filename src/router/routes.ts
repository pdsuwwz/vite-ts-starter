import childRoutes from '@/router/child-routes'
import { currentLocaleMap, localesMapping } from '@/locales'
import { isUndefined } from '@/utils/type'

const Layout = () => import('@/components/Layout/index.vue')

// Creates regex (zh-hans|en)
function getLocaleRegex () {
  let reg = ''
  localesMapping.forEach((localeItem, index) => {
    const line = index !== localesMapping.length - 1 ? '|' : ''
    reg = `${ reg }${ localeItem.localeCode }${ line }`
  })
  return `(${ reg })`
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    redirect: '/project'
  },
  {
    path: `/:locale${ getLocaleRegex() }?`,
    component: Layout,
    beforeEnter (to, from, next) {
      console.log('beforeEnter: to ', to)
      if (currentLocaleMap(to.params.locale) && !isUndefined(to.params.pathMatch)) {
        next(`/${ to.params.locale }/project`)
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
      ...childRoutes
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/components/404.vue')
  }
]

export default routes
