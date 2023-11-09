
import { sleep } from '@/utils/request'
import {
  getProjectList,
  getProjectDetail,
  createProject,
  updateTogglePublishStatus
} from '@/modules/Project/api'
import MUTATION from '@/modules/Project/store/mutations-type'
import mixin from '@/store/utils/mixin'
import {
  projectDetail,
  projectList
} from '@/modules/Project/data'
import { Module } from 'vuex'
import { IGlobalState } from '@/store'

export interface ProjectDetailProps {
  corpName: string | null
  createTime: string | null
  id: string | null
  isPublished: boolean
  name: string | null
  notes: string | null
}
export interface IProjectModule {
  demoList: any
  projectList: any[]
  projectDetail: ProjectDetailProps
}

const ProjectModule: Module<IProjectModule, IGlobalState> = {
  namespaced: true,
  _name: 'Project',
  state: {
    demoList: {},
    projectList: [],
    projectDetail: {
      corpName: '',
      createTime: '',
      id: '',
      isPublished: true,
      name: '',
      notes: ''
    }
  },
  getters: {
    demoList: state => state.demoList
  },
  actions: {
    async getSearchProjectByQuery ({ commit }, query) {
      await sleep(1000)
      const res = await getProjectList(query)
      return this.filterResponse(res, null, () => {})
    },
    async getProjectList ({ commit }, params) {
      await sleep(1000)
      // const res = await getProjectList(params)
      const res = {
        msg: 'ok',
        error: 0,
        data: {
          projectList
        }
      }
      return this.filterResponse(res, () => {
        commit(MUTATION.SET_PROJECT_LIST, res.data.projectList)
      }, () => {})
    },
    async createProject ({ state, commit }, params) {
      // const res = await createProject(params)
      const res = {
        msg: 'ok',
        error: 0,
        data: {}
      }
      await sleep(600)
      return this.filterResponse(res, () => {
        const date = new Date()
        const [, id] = String(Math.random()).split('.')
        state.projectList.push({
          id,
          name: params.name,
          corpName: params.corpName,
          notes: params.notes,
          isPublished: false,
          createTime: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        })
      })
    },
    async updateTogglePublishStatus ({ commit }, params) {
      const res = await updateTogglePublishStatus(params)
      return this.filterResponse(res, null)
    }
  },
  mutations: {
    [MUTATION.SET_PROJECT_LIST] (state, projectList) {
      state.projectList = projectList
    }
  },
  ...mixin
}

export default ProjectModule
