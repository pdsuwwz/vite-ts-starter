import { Module } from 'vuex'
import { sleep } from '@/utils/request'
import {
  login,
  logout,
  getUserInfoData,
  updateChangeLanguage
} from '@/modules/UserAccount/api'
import MUTATION from '@/modules/UserAccount/store/mutations-type'
import mixin from '@/store/utils/mixin'

import { IGlobalState } from '@/store'

export interface IUserAccountState {
  locale: string
  demoList: any
  userInfo: any
}

const UserAccountModule: Module<IUserAccountState, IGlobalState> = {
  namespaced: true,
  _name: 'UserAccount',
  state: {
    locale: 'en',
    demoList: {},
    userInfo: {}
  },
  getters: {
    demoList: state => state.demoList
  },
  mutations: {
    [MUTATION.SET_LANGUAGE] (state, locale) {
      state.locale = locale
    },
    [MUTATION.SET_DEMO_LIST] (state, demoList) {
      state.demoList = demoList
    },
    [MUTATION.UPDATE_USER_INFO] (state, info) {
      state.userInfo = info
    }
  },
  actions: {
    async GetModuleTestList ({ commit }, params) {
      // TODO: 模拟响应时间
      await sleep(1000)
      // TODO: 模拟 api
      // const result = await getDemoTestList(params)
      const result = {
        test: 'ok'
      }
      commit(MUTATION.SET_DEMO_LIST, result)
      return result
    },
    async updateChangeLanguage ({ commit }, params) {
      const result = await updateChangeLanguage(params)
      return this.filterResponse(result)
    },
    setLanguage ({ commit }, data) {
      commit(MUTATION.SET_LANGUAGE, data.locale)
    },
    async login ({ state, commit }, data) {
      await sleep(1000)
      const res = await login(data)
      return this.filterResponse(res, null, () => {})
    },
    async logout ({ state, commit }) {
      const res = await logout()
      return this.filterResponse(res, null, () => {})
    },
    async getUserInfo ({ commit }) {
      const res = await getUserInfoData()
      await sleep(1000)
      return this.filterResponse(res, ({ data }) => {
        commit(MUTATION.UPDATE_USER_INFO, data)
      })
    }
  },
  ...mixin
}

export default UserAccountModule
