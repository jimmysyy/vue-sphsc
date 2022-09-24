// 结算页面
import { reqAddressInfo,reqOrderInfo } from "@/api";

const state = {
    address:[],
    orderInfo:[],
};
const mutations = {
    GETADDRESS(state,Address){
        state.address = Address;
    },
    GETORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo;
    }
};
const actions = {
    // 获取用户地址信息
    async getAddress({commit}){
        let result = await reqAddressInfo();
        if(result.code==200){
            commit('GETADDRESS',result.data)
        }
    },

    // 获取交易页信息
    async getOrderInfo({commit}){
        let result = await reqOrderInfo();
        if(result.code==200){
            commit('GETORDERINFO',result.data)
        }
    }
};
const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}