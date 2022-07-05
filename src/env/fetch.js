import fetch from '@/utils/fetch'
// import { Modal, message } from 'antd'

const fetchInstance = fetch.create({
  baseURL: '/api',
  method: 'POST',
  // rest: true,
  dataType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'login-token': 'ibbtHs5fK3RAwcOGr1KjVndZfpAyc3hh'
  },
  // 目前还没有做鉴权，下面的设置为`false`，和服务端的*相对应
  // 如果设为`true`，需要服务端设置响应头`Access-Control-Allow-Origin`为具体的白名单
  withCredentials: false,
  responseType: 'json',
  transformResponse: [function (response) {
    response = typeof response === 'string' && JSON.parse(response) || response
    if (response) {
      if ((response.code && response.code == 401) || response.status == 401 || response.error === "invalid_request" || response.error === "invalid_token") {//token超时重新登录
        localStorage.clear()
        location.href = location.origin
      }
      if ((response.code && response.code == 403) || response.status == 403) {
        const errorMsg = response.message || response.errorMsg || '登录超时，请重新登录'
        throw new Error(errorMsg)
      }
      return response
    }
    return {
      success: false,
      content: {},
      error: {
        message: '网络异常，请刷新页面重试',
        code: '',
      },
    }
  }],
})

// 统一的返回处理
fetchInstance.interceptors.response.use(function (res) {
  let response = res.data
  if (!response.success && response.code != 200) {
    // message.error(response.message)
    return Promise.reject(response)
  } else {
    return response
  }
}, function (error) {
  return Promise.reject(error)
})

export default fetchInstance
