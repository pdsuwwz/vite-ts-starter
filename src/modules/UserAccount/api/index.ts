import request from '@/utils/request'

export function login (data) {
  // return request({
  //   url: '/login',
  //   method: 'post',
  //   data
  // })

  return {
    error: 0,
    msg: 'OK',
    data: {
      language: 'en',
      user: {
        email: 'admin@org.com',
        phone: '15290788137',
        username: '管理员',
        id: '601d85900f43923hffbcs',
        token: '4v8acea-6a89-2a2ebc-10802-9ac19003'
      }
    }
  }
}
export function logout () {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function getUserInfoData(params = {}) {
  // return request({
  //   url: '/user_info',
  //   method: 'get',
  //   params
  // })
  return {
    error: 0,
    msg: 'OK',
    data: {
      language: 'en',
      user: {
        email: 'admin@org.com',
        phone: '15290788137',
        username: '管理员',
        id: '601d85900f43923hffbcs',
        token: '4v8acea-6a89-2a2ebc-10802-9ac19003'
      }
    }
  }
}

// 切换后端语言
export function updateChangeLanguage (data) {
  return request({
    url: '/acl/changelanguage',
    method: 'post',
    data
  })
}

export function getDemoTestList (params) {
  return request({
    url: '/api/demo_test/list',
    method: 'get',
    params
  })
}

export function createDemoTest (data) {
  return request({
    url: '/api/demo_test',
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
