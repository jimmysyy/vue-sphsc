//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'

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
    routes:[
        {
            path:"/detail",
            component:Detail,
            meta:{show:true}
        },
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        {
            // 给数据占位,在占位后加上？，代表params参数可传可不传
            name:'search',
            path:"/search/:keyword?",
            component:Search,

            //路由组件传递props,只能传params参数
            // props:true,
            //对象写法：额外的给路由组件传递一些props
            // props:{a:1,b:2},
            //函数写法：可以params参数、query参数、通过props传递给路由组件
            // props:(route)=>{
            //     return {keyword:$route.params.keyword,k:$route.query.k}
            // },
            meta:{show:true}
        },
        // 重定向，在项目跑起来的时候，访问/，立马让他定向到首页
        {
            path:'*',
            redirect:"/home"
        }
    ]
})