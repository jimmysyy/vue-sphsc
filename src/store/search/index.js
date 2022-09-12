import {reqGetSearchInfo} from "@/api";

//search模块的小仓库
const state = {
    searchList:{}
};
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
};
const actions = {
    //获取search模块数据
    async getSearchList({commit},params={}){
        //当前这个函数调用时至少需要传递一个参数（空对象）
        //params形参：是当前用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result =  await reqGetSearchInfo(params)
        console.log(result.data)
        if(result.data.code == 200){
            commit("GETSEARCHLIST",result.data.data)
        }
    }

};
//计算属性，在项目中，为了简化数据而生
//把组件需要用的数据简化，可以方便获取数据

const getters = {
    //当前形参state,当前仓库中的state，并非大仓库中的那个state
    //要预防没数据的情况
    goodsList(state){
        return state.searchList.goodsList||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList||[];
    },
    attrsList(state){
        return state.searchList.attrsList||[];
    },
};

export default{
    state,
    mutations,
    actions,
    getters
}