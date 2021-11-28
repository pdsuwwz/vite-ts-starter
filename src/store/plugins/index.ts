import { getFilterResponse } from '@/store/utils/mixin'
import router from '@/router'
import { Store } from 'vuex'
import { IGlobalState } from '@/store'

const mixinPlugins = (store: Store<IGlobalState>) => {
  (store as any).filterResponse = getFilterResponse;
  (store as any).router = router
}

export default [
  mixinPlugins
]

declare module 'vuex' {
  export interface Store<S> {
    filterResponse: typeof getFilterResponse
    readonly state: S
  }
}
