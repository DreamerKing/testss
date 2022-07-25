import fetch from "@/env/fetch"

const request = fetch.request

export function loginApi(data) {
  return request({
    url: `/devops/file/list`,
    method: 'POST',
    strictSSL: false,//访问https
    data: data
  })
}

export function logoutApi(params) {
  return request({
    url: `/user/logout`,
    method: 'GET',
    params,
  })
}
