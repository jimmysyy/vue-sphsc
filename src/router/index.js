//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'

//使用插件
Vue.use(VueRouter)
//引入路由组件

// 引入store
import store from '@/store'


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

let router =  new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {y:0}
    }
});

// 全局守卫：前置守卫（在路由跳转之前判断）
router.beforeEach(async (to,from,next)=>{
    // to:可以获取跳转到哪个路由信息
    // from:可以获取从哪个路由而来的信息
    // next：放行函数 next(path)放行到指定路由      next(false)
    
    // 用户登录了有token
    let token = store.state.user.token;
    let name = store.state.user.UserInfo.name;
    // 登录成功
    if (token) {
        // 禁止去login
        if (to.path=='/login') {
            next('/home')
        }else{
            // 登录，去home,search,detail ,shopcart
            // 如果用户名已有
            if(name){
                // 没有用户信息，派发action让仓库存储用户信息再跳转
                next();
            }else{
                try {
                    await store.dispatch("getUserInfo");
                    next();
                } catch (error) {
                    // token失效了，重新登录
                    // 清除token
                    await store.dispatch('userLogout');
                    next('/login')
                }
            }
        }
    } else {
        next();
    }
});


export default router