import Vue from 'vue'
import App from './App.vue'

//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav';
//轮播图全局组件
import Carousel from '@/components/Carousel';
//第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)

//引入MockServer.js
import '@/mock/mockServe'
// import {reqGetSearchInfo} from '@/api';
// console.log(reqGetSearchInfo({}))

//引入swiper样式，全局
import "swiper/css/swiper.css"


Vue.config.productionTip = false

//引入路由
import router from '@/router/index';

//引入仓库
import store from './store';


// //因为分别暴露
// import {reqCategoryList} from '@/api/index';
// reqCategoryList();


new Vue({
  
  render: h => h(App),
  //router必须小写，KV一致省略V
  //注册路由信息:组件身上都拥有$route,$route属性
  router,
  //注册仓库：组件实例的身上多了一个$store的属性
  store
}).$mount('#app')
