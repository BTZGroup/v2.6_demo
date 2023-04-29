import axios from "axios"
// 创建axios 赋值给常量service 

let config = {
  timeout: 50000,
  headers: {
    Accept: "application/json;charset=utf-8",
    "Content-Type": "multipart.form-data"
  }
}

const service = axios.create(config);

// 添加请求拦截器（Interceptors）
service.interceptors.request.use(function (config) {
  let token = sessionStorage.getItem('token')
  if (token) {
    config.headers['Access-Token'] = token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
service.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default service