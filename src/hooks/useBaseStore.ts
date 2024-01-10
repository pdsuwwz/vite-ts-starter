import { IGlobalState } from '@/store'

export default function useBaseStore() {
  return useStore<IGlobalState>()
}
