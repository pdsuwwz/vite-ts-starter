import { nextTick } from 'vue'

import { Loading } from 'element-plus'

export class ServiceLoading {
  static instance = null

  static show (options) {
    this.instance = Loading.service(options)
  }

  static hide () {
    nextTick(() => {
      this.instance.close()
    })
  }
}
