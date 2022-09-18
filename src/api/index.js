//当前这个模块：API进行统一管理
import requests from './request'

import mockRequests from './mockAjax'

//三级联动接口
// /api/product/getBaseCategoryList   get请求  无参数
 //发请求:axios发请求返回结果为Promise对象
export const reqCategoryList = ()=>requests({url:'/api/product/getBaseCategoryList',method:'get'});


//获取banner(Home首页的轮播图接口)
//get('/mock/banner)里面的mock不能丢了，不然无法直接请求banner
export const reqGetBannerList = ()=>mockRequests.get('/mock/banner');

//获取floor数据
export const reqFloorList = ()=>mockRequests.get('/mock/floor')

//获取搜索模块数据 地址：/api/list 请求方式:post 请求需要带参数
//当前接口，给服务器传递参数params,至少是一个空对象
export const reqGetSearchInfo = (params)=>requests({url:"/api/list",method:"post",data:params})

//获取产品详情的接口 URL: /api/item/{skuId}  请求方式：get
export const reqGoodsInfo = (skuid)=>requests({url:`/api/item/${skuid}`,method:"get"})

//将产品添加到购物车中（获取更新产品的个数）
// /api/cart/addToCart/{ skuId }/{ skuNum }    请求方式：post
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/api/cart/addToCart/${skuId}/${skuNum}`,method:'post'})