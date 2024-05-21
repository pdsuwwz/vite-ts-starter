import type { IGlobalState } from '@/store'
import type { Store } from 'vuex'

// 定义 injection key
export const key: InjectionKey<Store<IGlobalState>> = Symbol()

export default function useBaseStore() {
  return useStore<IGlobalState>()
}
