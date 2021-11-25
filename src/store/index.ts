import { createStore } from 'vuex'

/**
 * plugins mount
 */
// import plugins from '@/store/plugins'
import plugins from '@/store/plugins'

/**
 * modules mount
 */
import UserAccount from '@/modules/UserAccount/store'
import Project from '@/modules/Project/store'
import ResultModule from '@/modules/Result/store'

const store = createStore({
  modules: {
    UserAccount: UserAccount,
    Project: Project,
    Result: ResultModule
  },
  plugins
})

export default store
