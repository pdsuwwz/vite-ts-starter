import { ElMessage } from 'element-plus'

export function filterResponse (res, successCb = null, errorCb = null) {
  return new Promise((resolve) => {
    if (res && res.error === 0) {
      successCb && successCb(res)
    } else {
      errorCb
        ? errorCb(res)
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
  getAction (name) {
    return `${this._name}/${Object.keys(this.actions)[Object.keys(this.actions).indexOf(name)]}`
  },
  getMutation (name) {
    return `${this._name}/${Object.keys(this.mutations)[Object.keys(this.mutations).indexOf(name)]}`
  }
}
