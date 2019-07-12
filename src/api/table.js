import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}

export function getUserList() {
  return request({
    // url: '/nodeApi/getUserList',
    url: 'http://192.168.25.191:3000/nodeApi/getUserList',
    method: 'get'
  })
}

export function getUserDetail(params) {
  return request({
    url: '/nodeApi/getUserDetail',
    method: 'post',
    data: params
  })
}
