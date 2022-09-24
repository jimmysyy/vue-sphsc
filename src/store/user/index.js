// 登录与注册 
import {reqGetCode,reqUserRegister,reqUserLogin, reqUserInfo, reqLogout} from '@/api'
import {getToken, setToken, removeToken} from '@/utils/token'

const state = {
    code:'',
    token:getToken(),
    UserInfo:{},
};
const mutations = {
    GETCODE(state,code){
        state.code = code;
    },

    USERLOGIN(state,token){
        state.token = token;
    },

    GETUSERINFO(state,UserInfo){
        state.UserInfo = UserInfo;
    },

    // 要在这里操作state
    CLEAR(state){
        state.token = '';
        state.UserInfo = {};
        removeToken();
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
        console.log(result)
        if(result.code==200){
            commit("USERLOGIN",result.data.token);
            // token存到本地后，还需要去拦截器处理
            setToken(result.data.token);
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },

    // 获取用户信息
    async getUserInfo({commit}){
        let result = await reqUserInfo();
        if (result.code==200) {
            commit("GETUSERINFO",result.data)
        }else{
            return Promise.reject(new Error('faile'));
        }

        // 这里会因为token要先登录后才有，要存储与localstorage
    },

    // 退出登录
    async userLogout({commit}){
        // 通知服务器清除token
        let result = await reqLogout();
        console.log(result)
        if(result.code==200){
            commit("CLEAR");
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
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