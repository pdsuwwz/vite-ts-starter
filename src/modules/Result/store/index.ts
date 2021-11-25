
import { sleep } from '@/utils/request'
import { getDemoTestList } from '@/modules/Result/api'
import MUTATION from '@/modules/Result/store/mutations-type'
import mixin from '@/store/utils/mixin'

import { overviewMock } from '@/modules/Result/data'

const ResultModule = {
  namespaced: true,
  _name: 'Result',
  state: {
    demoList: {},
    overviewData: {
      title: '',
      content: ''
    }
  },
  getters: {
    demoList: state => state.demoList
  },

  mutations: {
    [MUTATION.UPDATE_OVERVIEW_DATA] (state, data) {
      state.overviewData = data
    }
  },
  actions: {
    async getResultOverview ({ commit }, query) {
      // const res = await getDemoTestList(query)
      // return this.filterResponse(res, null, () => {})
      await sleep(800)
      const res = {
        msg: 'ok',
        error: 0,
        data: overviewMock
      }

      return this.filterResponse(res, ({ data }) => {
        commit(MUTATION.UPDATE_OVERVIEW_DATA, data)
      }, () => {})
    }
  },
  ...mixin
}

export default ResultModule
