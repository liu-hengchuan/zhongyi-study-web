import Vue from 'vue'
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API || '/api', // api的base_url
  timeout: 5000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 可以在这里添加token等请求头信息
    return config
  },
  error => {
    console.log('request error:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 可以在这里统一处理响应状态码
    if (res.code !== undefined && res.code !== 200) {
      // 显示错误信息
      Vue.prototype.$message.error(res.msg || '请求失败')
      return Promise.reject(new Error(res.msg || '请求失败'))
    } else {
      return res
    }
  },
  error => {
    console.log('response error:', error)
    Vue.prototype.$message.error(error.message || '请求失败')
    return Promise.reject(error)
  }
)

export default service