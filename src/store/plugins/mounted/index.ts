
/**
 * plugin single mounted
 */

// import { filterResponse } from '@/store/utils/mixin'
// import router from '@/router'
import { filterResponse } from '@/store/utils/mixin'
import router from '@/router'

const mixinVuex = store => {
  store.filterResponse = filterResponse
  store.router = router
}

export default mixinVuex
