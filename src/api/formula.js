import request from '../utils/request'

// 获取所有方剂
export function getAllPrescriptions() {
  return request({
    url: '/prescriptions',
    method: 'get'
  })
}

// 分页查询方剂
export function getPrescriptionsPage(page, size) {
  return request({
    url: '/prescriptions/page',
    method: 'get',
    params: { page, size }
  })
}

// 根据ID获取方剂
export function getPrescriptionById(id) {
  return request({
    url: `/prescriptions/${id}`,
    method: 'get'
  })
}

// 搜索方剂
export function searchPrescriptions(keyword) {
  return request({
    url: '/prescriptions/search',
    method: 'get',
    params: { keyword }
  })
}

// 根据分类获取方剂
export function getPrescriptionsByCategory(category) {
  return request({
    url: `/prescriptions/category/${category}`,
    method: 'get'
  })
}