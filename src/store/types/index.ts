import type { IUserAccountState } from '@/modules/UserAccount/store'
import type { IResultModule } from '@/modules/Result/store'
import type { IProjectModule } from '@/modules/Project/store'

export interface IGlobalState {
  UserAccount: IUserAccountState
  Result: IResultModule
  Project: IProjectModule
}

