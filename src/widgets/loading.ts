import { nextTick } from 'vue'

import { ElLoading, ILoadingInstance, ILoadingOptions } from 'element-plus'

export class ServiceLoading {
  static instance: ILoadingInstance | null = null

  static show (options: ILoadingOptions) {
    this.instance = ElLoading.service(options)
  }

  static hide () {
    nextTick(() => {
      if (this.instance) {
        this.instance.close()
      }
    })
  }
}
