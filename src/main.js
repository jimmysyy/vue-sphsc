import Vue from 'vue'
import App from './App.vue'

//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav';
//轮播图全局组件
import Carousel from '@/components/Carousel';
//第一个参数：全局组件的名字 第二个参数：哪一个组件
//分页器全局组件
import Pagination from '@/components/Pagination';
// 引入e-ui的部分组件
import { Button,MessageBox } from 'element-ui';

Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name,Button)
// 挂原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

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

// 统一接口api文件夹里面的请求函数
import * as API from '@/api'


// //因为分别暴露
// import {reqCategoryList} from '@/api/index';
// reqCategoryList();


new Vue({
  
  render: h => h(App),
  //全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this;

    // 直接将api挂载到原型
    Vue.prototype.$API = API;
  },

  //router必须小写，KV一致省略V
  //注册路由信息:组件身上都拥有$route,$route属性
  router,
  //注册仓库：组件实例的身上多了一个$store的属性
  store
}).$mount('#app')
