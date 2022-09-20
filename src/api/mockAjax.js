//对于axios进行二次封装
import axios from "axios";

//引入进度条和进度条样式
import nprogress from 'nprogress';
import "nprogress/nprogress.css";
//start:进度条开始 done:进度条结束

//1：利用axios对象的方法create，去创建一个车axios实例
//2：request就是axios，只不过配置一下
let requests = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中会出现
    baseURL:"/mock",
    //代表请求超时的事件
    timeout:5000,

});
//请求拦截器
requests.interceptors.request.use((config)=>{
    //config：配置对象，对象里面有一个属性很重要，header请求头
    //进度条开始动
    nprogress.start();
    return config;
})
//响应拦截器
requests.interceptors.response.use((res) => {
    //成功的回调
    //进度条结束
    nprogress.done();

    return res.data;
},(error)=>{
    //失败的回调
    return Promise.reject(new Error('faile'));
});

//对外暴露
export default requests;