import { getFilterResponse } from '@/store/utils/mixin'
import type { Store } from 'vuex'
import type { IGlobalState } from '@/store'

const mixinPlugins = (store: Store<IGlobalState>) => {
  (store as any).filterResponse = getFilterResponse
}

export default [
  mixinPlugins
]

