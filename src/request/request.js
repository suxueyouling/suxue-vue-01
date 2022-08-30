import axios from 'axios'


// instance 实例 对象
const instance = axios.create({
  baseURL: "http://kumanxuan1.f3322.net:8881/cms",
  timeout: 5000//请求超时时间
})

// 主要有两个东西: 请求拦截器,  响应拦截器
instance.interceptors.request.use(config => {
  // 什么时候执行这里的代码??  在每个请求发出去之前
  // config 是什么?? 是一个对象 记录了本次请求的相关信息
  // console.log("config为:", config);
  // 这个函数用来做什么??  可以用来做一些请求前的准备工作,比如: 添加请求头

  // let token = xxxx;
  // if (token) {
  //   就在请求头中携带token
  // }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(res => {
  // 什么时候执行这里的代码??  后端返回响应,在进入到组件中成功地回调函数之前,执行
  // res 是什么?? 是一个对象 , 原先说的axios封装的res对象
  // console.log("res为:", res);
  // 这个函数用来做什么??  对服务器相应回来的数据做统一的处理
  return res.data
}, err => {
  return Promise.reject(err)
})

export default instance