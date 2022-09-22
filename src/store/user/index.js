// 登录与注册 
import {reqGetCode,reqUserRegister,reqUserLogin} from '@/api'

const state = {
    code:'',
    token:'',
};
const mutations = {
    GETCODE(state,code){
        state.code = code;
    },

    USERLOGIN(state,token){
        state.token = token;
    }
};
const actions = {
    // 验证码
    async getCode({commit},phone){
        // 验证码直接发到后台
        let result =  await reqGetCode(phone);
        if(result.code==200){
            commit("GETCODE",result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },

    // 用户注册
    async userRegister({commit},user){
        let result =  await reqUserRegister(user);
        if(result.code==200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'))
        }
    },

    // 登录业务【token】
    async userLogin({commit},data){
        let result =  await reqUserLogin(data);
        if(result.code==200){
            commit("USERLOGIN",result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
};
const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters
}