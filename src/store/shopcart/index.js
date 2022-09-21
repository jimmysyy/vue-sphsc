//购物车的store
import { reqCartList,reqDeleteCartById,reqUpdateCheckedByid } from "@/api";

const state = {
    cartList:[],
};
const mutations = { 
    GETCARTLIST(state,cartList){
        state.cartList = cartList;
    }
};
const actions = {
    //获取购物车列表数据
    async getCartList({commit}){
        let result = await reqCartList();
        if(result.code==200){
            commit("GETCARTLIST",result.data)
        }
    },
    // 删除购物车某一个产品
    async deleteAllCheckedCart({commit},skuId){
        let result = await reqDeleteCartById(skuId);
        if(result.code==200){
            return "ok";
        }else{
            return Promise.reject(new Error("faile"));
        }
    },

    // 修改购物车产品状态
    async updateCheckedById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedByid(skuId,isChecked);
        if(result.code==200){
            return "ok";
        }else{
            return Promise.reject(new Error("faile"));
        }
    },

    // 删除全部勾选的产品
    deleteCheckedCart({dispatch,getters}){
        // context:小仓库,commit【提交mutations修改state】 getters【计算属性】 dispatch【派发action】 state【当前仓库数据】
        // 获取购物车中全部的商品（数组）
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item=>{
            let result =  item.isChecked==1?dispatch('deleteAllCheckedCart',item.skuId):'';
            PromiseAll.push(Promise);
        });
        // 返回结果要都成功，有一个失败即返回失败结果
        return Promise.all(PromiseAll)
    }
};
const getters = {
    cartList(state){
        return state.cartList[0]||{};
    },
}

export default{
    state,
    mutations,
    actions,
    getters
}