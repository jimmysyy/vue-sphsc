//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'

//使用插件
Vue.use(VueRouter)
//引入路由组件


//把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
//重写push|replace
//第一个参数：告诉原来push方法，你往哪里跳转（传递哪些参数）
VueRouter.prototype.push = function (locaton, resolve, reject) {
    if (resolve && reject) {
        //call||apply区别
        //相同点，都可以调用函数一次，都可以参改函数的上下文一次
        //不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
        originPush.call(this, locaton, resolve, reject);
    } else {
        originPush.call(this, locaton, ()=> {}, ()=> {});
    }
}
//把VueRouter原型对象的Replace，先保存一份
let originReplace = VueRouter.prototype.replace;
//重写push|replace
//第一个参数：告诉原来Replace方法，你往哪里跳转（传递哪些参数）
VueRouter.prototype.replace = function (locaton, resolve, reject) {
    if (resolve && reject) {
        //call||apply区别
        //相同点，都可以调用函数一次，都可以参改函数的上下文一次
        //不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
        originReplace.call(this, locaton, resolve, reject);
    } else {
        originReplace.call(this, locaton, ()=> {}, ()=> {});
    }
}

export default new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {y:0}
    }
})