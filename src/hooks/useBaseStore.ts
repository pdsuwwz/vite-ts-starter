import { useStore } from 'vuex'
import { IGlobalState } from '@/store'

export default function useBaseStore() {
  return useStore<IGlobalState>()
}
