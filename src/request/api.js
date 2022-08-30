import instance from "./request"
// 这个文件用来统一管理项目中所有的api链接

// 首页精品推荐的请求
export const JinpinAPI = () => instance.get("/products/recommend")


