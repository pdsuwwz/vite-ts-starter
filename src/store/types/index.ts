import { IUserAccountState } from '@/modules/UserAccount/store'
import { IResultModule } from '@/modules/Result/store'
import { IProjectModule } from '@/modules/Project/store'

export interface IGlobalState {
  UserAccount: IUserAccountState
  Result: IResultModule
  Project: IProjectModule
}

