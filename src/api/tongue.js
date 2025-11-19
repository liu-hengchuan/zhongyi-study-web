import request from '../utils/request'

// 获取所有舌诊记录
export function getAllTongueDiagnosis() {
  return request({
    url: '/tongue-diagnosis',
    method: 'get'
  })
}

// 分页查询舌诊记录
export function getTongueDiagnosisPage(page, size) {
  return request({
    url: '/tongue-diagnosis/page',
    method: 'get',
    params: { page, size }
  })
}

// 根据ID获取舌诊记录
export function getTongueDiagnosisById(id) {
  return request({
    url: `/tongue-diagnosis/${id}`,
    method: 'get'
  })
}

// 新增舌诊记录
export function addTongueDiagnosis(data) {
  return request({
    url: '/tongue-diagnosis',
    method: 'post',
    data
  })
}

// 更新舌诊记录
export function updateTongueDiagnosis(data) {
  return request({
    url: '/tongue-diagnosis',
    method: 'put',
    data
  })
}

// 删除舌诊记录
export function deleteTongueDiagnosis(id) {
  return request({
    url: `/tongue-diagnosis/${id}`,
    method: 'delete'
  })
}