import { getFilterResponse } from '@/store/utils/mixin'
import { Store } from 'vuex'
import { IGlobalState } from '@/store'

const mixinPlugins = (store: Store<IGlobalState>) => {
  (store as any).filterResponse = getFilterResponse
}

export default [
  mixinPlugins
]

