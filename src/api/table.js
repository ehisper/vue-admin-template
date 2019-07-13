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
    url: 'http://localhost:3000/nodeApi/getUserList',
    method: 'get'
  })
}

export function getUserDetail(params) {
  return request({
    url: 'http://localhost:3000/nodeApi/getUserDetail',
    method: 'post',
    data: params
  })
}

export function deleteUser(params) {
  return request({
    url: 'http://localhost:3000/nodeApi/deleteUser',
    method: 'get',
    params
  })
}

export function addUser(params) {
  return request({
    url: 'http://localhost:3000/nodeApi/addUser',
    method: 'post',
    data: params
  })
}

export function updateUser(params) {
  return request({
    url: 'http://localhost:3000/nodeApi/updateUser',
    method: 'post',
    data: params
  })
}