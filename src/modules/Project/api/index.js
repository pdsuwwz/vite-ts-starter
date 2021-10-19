import request from '@/utils/request'

export function getProjectList (params) {
  return request({
    url: '/project/list',
    method: 'get',
    params
  })
}

export function getProjectDetail (params) {
  return request({
    url: '/project',
    method: 'get',
    params
  })
}

export function createProject (data) {
  return request({
    url: '/project',
    method: 'post',
    data
  })
}

export function updateDemoTest (data) {
  return request({
    url: `/api/demo_test/${data.demoId}`,
    method: 'put',
    data
  })
}

export function deleteDemoTest (demoId) {
  return request({
    url: `/api/demo_test/${demoId}`,
    method: 'delete'
  })
}

export function updateTogglePublishStatus (params) {
  return request({
    url: '/project/toggle_status',
    method: 'get',
    params
  })
}
