import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
import routes from './routes'

const history = import.meta.env.VITE_ROUTER_MODE === 'hash'
  ? createWebHashHistory()
  : createWebHistory()

export default createRouter({
  base: '/',
  history,
  routes
})
