import request from '../utils/request'

// 获取所有经典典籍
export function getAllClassicBooks() {
  return request({
    url: '/classic-books',
    method: 'get'
  })
}

// 分页查询经典典籍
export function getClassicBooksPage(page, size) {
  return request({
    url: '/classic-books/page',
    method: 'get',
    params: { page, size }
  })
}

// 根据ID获取经典典籍
export function getClassicBookById(id) {
  return request({
    url: `/classic-books/${id}`,
    method: 'get'
  })
}

// 根据分类获取经典典籍
export function getClassicBooksByCategory(category) {
  return request({
    url: `/classic-books/category/${category}`,
    method: 'get'
  })
}