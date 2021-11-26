import { ComponentInternalInstance, getCurrentInstance } from 'vue'
export default function useCurrentInstance() {
  const { proxy } = getCurrentInstance() as any

  return {
    proxy
  }
}
