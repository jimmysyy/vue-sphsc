import { reqGoodsInfo } from "@/api";

const state = {
    goodInfo:{},
}
const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo;
    }
}
const actions = {
    async getGoodInfo({commit},skuid){
       let result =  await reqGoodsInfo(skuid);
       
       if(result.data.code==200){
        // console.log(result.data.code)
        commit('GETGOODINFO',result.data.data);
       }
    }
}
//简化数据
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView||[];
    },
    skuInfo(state){
        return state.goodInfo.skuInfo||[];
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[];
    }
}

export default{
    state,
    actions,
    mutations,
    getters
}