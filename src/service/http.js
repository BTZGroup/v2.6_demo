import axios from "axios"

let config = {
  timeout: 50000,
  headers: {
    Accept: "application/json;charset=utf-8",
    "Content-Type": "application/json;charset=UTF-8",
  },
  goOnResponse: true
}
const http = axios.create(config);
// 添加请求拦截器（Interceptors）
http.interceptors.request.use(function (config) {
  console.log("这是请求发出前的数据", config)
  // 发送请求之前做写什么
  let token = Utils.getCache("token", 'session')
  if (token) {
    config.headers['Access-Token'] = token;
  }
  if (config.logInfo) {
    Service.log.save(config.logInfo)
  }
  return config;
}, function (error) {
  // 请求错误的时候做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  if (response.headers['Access-Token'] || response.headers['access-token']) {
    config.goOnResponse = true
    Utils.setCache('token', response.headers['Access-Token'] || response.headers['access-token'], 'session');
  }
  if (response.data.result == 'FAILED' && response.data.msg == 'SESSION_EXPIRED') {
    if (window.location.pathname !== '/' && config.goOnResponse) {
      // alert("长时间未操作，请重新登录！")
      config.goOnResponse = false
      window.location.href = "/"
    }
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default http