import axios from "axios";

export function request(config) {
  //创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //2.axios的拦截器
  //2.1 请求拦截的作用

  instance.interceptors.request.use(config => {
    console.log('请求拦截器执行了');
    return config
  }, error => {
    return error
  })

  //2.2.响应拦截
  instance.interceptors.response.use(res => {
    console.log('响应拦截器执行了');
    return res.data
  }, error => {
    console.log(error);
  })

  //发送真正的网络请求
  return instance(config)
}
