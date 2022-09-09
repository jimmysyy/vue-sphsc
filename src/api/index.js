//当前这个模块：API进行统一管理
import requests from './request'

import mockRequests from './mockAjax'

//三级联动接口
// /api/product/getBaseCategoryList   get请求  无参数
 //发请求:axios发请求返回结果为Promise对象
export const reqCategoryList = ()=>requests({url:'/api/product/getBaseCategoryList',methos:'get'});


//获取banner(Home首页的轮播图接口)
//get('/mock/banner)里面的mock不能丢了，不然无法直接请求banner
export const reqGetBannerList = ()=>mockRequests.get('/mock/banner');

//获取floor数据
export const reqFloorList = ()=>mockRequests.get('/mock/floor')