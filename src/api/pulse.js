import request from '../utils/request'

// 获取所有脉象
export function getAllPulseDiagnosis() {
  return request({
    url: '/pulse-diagnosis',
    method: 'get'
  })
}

// 分页查询脉象
export function getPulseDiagnosisPage(page, size) {
  return request({
    url: '/pulse-diagnosis/page',
    method: 'get',
    params: { page, size }
  })
}

// 根据ID获取脉象
export function getPulseDiagnosisById(id) {
  return request({
    url: `/pulse-diagnosis/${id}`,
    method: 'get'
  })
}

// 新增脉象
export function addPulseDiagnosis(data) {
  return request({
    url: '/pulse-diagnosis',
    method: 'post',
    data
  })
}

// 更新脉象
export function updatePulseDiagnosis(data) {
  return request({
    url: '/pulse-diagnosis',
    method: 'put',
    data
  })
}

// 删除脉象
export function deletePulseDiagnosis(id) {
  return request({
    url: `/pulse-diagnosis/${id}`,
    method: 'delete'
  })
}