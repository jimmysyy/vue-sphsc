//路由的配置信息
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import Paysuccess from '@/pages/PaySuccess'

export default [
    {
        path:"/paysuccess",
        component:Paysuccess,
        meta:{show:true}
    },
    {
        path:"/pay",
        component:Pay,
        meta:{show:true}
    },
    {
        path:"/trade",
        component:Trade,
        meta:{show:true}
    },
    {
        path:"/shopcart",
        component:ShopCart,
        meta:{show:true}
    },
    {
        path:"/addcartsuccess",
        name:'addcartsuccess',
        component:AddCartSuccess,
        meta:{show:true}
    },
    {
        component:Detail,
        //带上商品的params参数
        path:"/detail/:skuid",
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