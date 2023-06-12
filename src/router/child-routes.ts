import type { RouteRecordRaw } from 'vue-router'

const importModule = import.meta.glob('../modules/**/*.vue')
const Layout = () => import('@/components/Layout/index.vue')
const LayoutView = () => import('@/components/Layout/LayoutView.vue')
const LayoutArea = () => import('@/components/Layout/LayoutArea.vue')

const childrenRoutes: Array<RouteRecordRaw> = [
  {
    path: 'test-layout',
    name: '布局测试',
    meta: {
      title: 'TestLayout'
    },
    component: LayoutArea
  },
  {
    path: 'user',
    component: Layout,
    name: 'User',
    meta: {
      title: '账户'
    },
    redirect: {
      name: 'UserLogin'
    },
    children: [
      {
        path: 'login',
        name: 'UserLogin',
        component: importModule['../modules/UserAccount/pages/login.vue'],
        meta: {
          title: '登录'
        }
      }
    ]
  },
  {
    path: 'project',
    component: Layout,
    name: 'Project',
    redirect: {
      name: 'ProjectList'
    },
    children: [
      {
        path: '',
        name: 'ProjectList',
        meta: {
          title: '项目列表'
        },
        component: importModule['../modules/Project/pages/list.vue']
      },
      {
        path: 'list',
        name: 'ProjectList',
        component: importModule['../modules/Project/pages/list.vue'],
        meta: {
          title: '项目管理'
        }
      }
    ]
  },
  {
    path: 'result',
    redirect: {
      name: 'ProjectList'
    }
  },
  {
    path: 'result/:projectId',
    component: LayoutView,
    name: 'result',
    redirect: {
      name: 'ResultOverview'
    },
    children: [
      {
        path: 'overview',
        name: 'ResultOverview',
        component: importModule['../modules/Result/pages/overview.vue'],
        meta: {
          title: '总览'
        }
      }
    ]
  }
]

export default childrenRoutes
