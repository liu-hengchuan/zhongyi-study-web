import request from '../utils/request'

// 获取所有中药
export function getAllMedicines() {
  return request({
    url: '/chinese-medicines',
    method: 'get'
  })
}

// 分页查询中药
export function getMedicinesPage(page, size) {
  return request({
    url: '/chinese-medicines/page',
    method: 'get',
    params: { page, size }
  })
}

// 根据ID获取中药
export function getMedicineById(id) {
  return request({
    url: `/chinese-medicines/${id}`,
    method: 'get'
  })
}

// 搜索中药
export function searchMedicines(keyword) {
  return request({
    url: '/chinese-medicines/search',
    method: 'get',
    params: { keyword }
  })
}