//当前这个模块：API进行统一管理
import requests from './requests'

import mockRequests from './mockAjax'



//三级联动接口
// /api/product/getBaseCategoryList   get请求  无参数
 //发请求:axios发请求返回结果为Promise对象
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});


//获取banner(Home首页的轮播图接口)
//get('/mock/banner)里面的mock不能丢了，不然无法直接请求banner
export const reqGetBannerList = ()=>mockRequests.get('/banner');

//获取floor数据
export const reqFloorList = ()=>mockRequests.get('/floor')

//获取搜索模块数据 地址：/api/list 请求方式:post 请求需要带参数
//当前接口，给服务器传递参数params,至少是一个空对象
export const reqGetSearchInfo = (params)=>requests({url:"/list",method:"post",data:params})

//获取产品详情的接口 URL: /api/item/{skuId}  请求方式：get
export const reqGoodsInfo = (skuid)=>requests({url:`/item/${skuid}`,method:"get"})

//将产品添加到购物车中（获取更新产品的个数）
// /api/cart/addToCart/{ skuId }/{ skuNum }    请求方式：post
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})

//获取购物车列表的数据接口
// /api/cart/cartList   method:get
export const reqCartList = ()=>requests({url:'/cart/cartList',method:'get'});

// 删除购物车产品的接口
// /api/cart/deleteCart/{skuId}  method:DELETE
export const reqDeleteCartById =(skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:"delete"})

// 切换商品选中状态
// /api/cart/checkCart/{skuId}/{isChecked}  method：get
export const reqUpdateCheckedByid = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:"get"})

// 获取验证码
// /api/user/passport/sendCode/{phone} get
export const reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

// 注册
// /api/user/passport/register   post
export const reqUserRegister =(data)=>requests({url:`/user/passport/register`,data,method:'post'})

// 登录
// /api/user/passport/login method:post
export const reqUserLogin = (data) =>requests({url:`/user/passport/login`,data,method:'post'});

// 获取用户信息(带着用户token获取用户信息)
// api/user/passport/auth/getUserInfo
export const reqUserInfo = ()=>requests({url:`/user/passport/auth/getUserInfo`,method:'get'});

// 推出登录
// /api/user/passport/logout get
export const reqLogout = ()=>requests({url:`/user/passport/logout`,method:'get'});

// 获取用户地址信息
// /api/user/userAddress/auth/findUserAddressList   get
export const reqAddressInfo = ()=>requests({url:`/user/userAddress/auth/findUserAddressList`,method:'get'})

// 获取订单交易页信息
// /api/order/auth/trade get
export const reqOrderInfo = ()=>requests({url:`/order/auth/trade`,method:'get'})

// 提交订单
// /api/order/auth/submitOrder?tradeNo={tradeNo} post
export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

// 获取支付信息
// /api/payment/weixin/createNative/{orderId}  GET
export const reqPayInfo = (orderId) => requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

// 查询支付状态
// /api/payment/weixin/queryPayStatus/{orderId} get
export const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

// 获取个人数据
// /api/order/auth/{page}/{limit} get
export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})