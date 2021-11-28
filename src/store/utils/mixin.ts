import { ActionTree } from 'vuex'
import { ElMessage } from 'element-plus'
import { RespData } from '@/utils/request'

type ResponseCallback = (res: RespData) => (typeof res) | any

export function getFilterResponse(
  res: RespData,
  successCallback?: ResponseCallback | null,
  errorCallback?: ResponseCallback | null
) {
  return new Promise((resolve) => {
    if (res && res.error === 0) {
      successCallback && successCallback(res)
    } else {
      errorCallback
        ? errorCallback(res)
        : ElMessage({
          type: 'error',
          message: res.msg,
          showClose: true
        })
    }
    resolve(res)
  })
}

export default {
  getAction (name: string) {
    const _self = this as any
    return `${_self._name}/${Object.keys(_self.actions)[Object.keys(_self.actions).indexOf(name)]}`
  },
  getMutation (name: string) {
    const _self = this as any
    return `${_self._name}/${Object.keys(_self.mutations)[Object.keys(_self.mutations).indexOf(name)]}`
  }
}

declare module 'vuex' {
  export interface Module<S, R> {
    actions?: ActionTree<S, R>
    _name: string
    getAction: (name: string) => typeof name
    getMutation: (name: string) => typeof name
  }
}
