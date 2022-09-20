import { reqGoodsInfo,reqAddOrUpdateShopCart } from "@/api";
//封装游客身份模块uuid---生成一个随机字符串
import {getUUID} from '@/utils/uuid_token';

const state = {
    goodInfo:{},
    // 游客临时身份
    uuid_token:getUUID(),
}
const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo;
    }
}
const actions = {
    //获取产品信息的action
    async getGoodInfo({commit},skuid){
       let result =  await reqGoodsInfo(skuid);
       
       if(result.code==200){
        // console.log(result.data.code)
        commit('GETGOODINFO',result.data);
       }
    },
    //将产品条件到购物车中
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        //只需要将前台参数带给服务器，不要返回其余数据，所以不用储存
        let result =  await reqAddOrUpdateShopCart(skuId,skuNum)
        //用返回的promise判断
        if(result.code==200){
            return "ok"
        }else{
            //代表加入购物车失败
            return Promise.reject(new Error('faile'))
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