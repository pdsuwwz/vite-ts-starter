import { createStore } from 'vuex'

import UserAccount, { IUserAccountState } from '@/modules/UserAccount/store'
import Project, { IProjectModule } from '@/modules/Project/store'
import ResultModule, { IResultModule } from '@/modules/Result/store'

import plugins from '@/store/plugins'

export interface IGlobalState {
  UserAccount: IUserAccountState
  Result: IResultModule
  Project: IProjectModule
}

const store = createStore<IGlobalState>({
  modules: {
    UserAccount: UserAccount,
    Project: Project,
    Result: ResultModule
  },
  plugins
})

export default store
