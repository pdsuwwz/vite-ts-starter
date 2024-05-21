import { createStore } from 'vuex'

import type { IUserAccountState } from '@/modules/UserAccount/store'
import UserAccount from '@/modules/UserAccount/store'
import type { IProjectModule } from '@/modules/Project/store'
import Project from '@/modules/Project/store'
import type { IResultModule } from '@/modules/Result/store'
import ResultModule from '@/modules/Result/store'

import plugins from '@/store/plugins'

export interface IGlobalState {
  UserAccount: IUserAccountState
  Result: IResultModule
  Project: IProjectModule
}

const store = createStore<IGlobalState>({
  modules: {
    UserAccount,
    Project,
    Result: ResultModule
  },
  plugins
})

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }
