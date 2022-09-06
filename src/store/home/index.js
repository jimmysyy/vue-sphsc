//引入封装
import {reqCategoryList,reqGetBannerList} from '@/api'

//home模块的小仓库
const state = {
    //state中数据默认的初始值别瞎写，服务器返回对象或者数组
    categoryList:[],
    bannerList:[]
};
const mutations = {
    CATEGORYLIST(state, categoryList){
        state.categoryList = categoryList.slice(0,16);
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList;
    }
};
const actions = {
    //通过api里面的接口函数调用，向服务器发请求，获取服务器数据
    //async 和 await 同时存在
    async categoryList({commit}){
        let result = await reqCategoryList();
        // console.log(result.data)
        if(result.data.code==200){
            commit("CATEGORYLIST", result.data.data)
        }
    },
    
    //获取首页轮播图数据
    async getBannerList({commit}){
        let result= await reqGetBannerList();
        if(result.data.code==200){
            commit('GETBANNERLIST', result.data.data)
        }
        // console.log(result.data)
    }
};
const getters = {};

export default{
    state,
    mutations,
    actions,
    getters
}