import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css"
//引入进度条模块 样式(可自定义样式)
// start 进度条开始  done 进度条结束
//对axios进行二次封装
const requests = axios.create({
   baseURL:"/api",
   timeout:5000,
});

//请求拦截器：在发请求之前，检测处理业务
requests.interceptors.request.use((config)=>{
   nprogress.start();
   //进度条开始
   return config;
})
//响应拦截器
requests.interceptors.response.use((res)=>{
   nprogress.done();
   //进度条结束
   return res.data;
},()=>{
   return Promise.reject(new Error('failure'));
})



export default requests;