import {post_array,post_json, get, post} from '../../http/axios'
import {setToken,getToken,removeToken} from '../../utils/auth'
export default {
    namespaced:true,
    state:{
        info:{},  //用户信息
        user:null,
        token:getToken(),
        addresses:[],
        currentAddress:{},
    },
    mutations:{
        refreshInfo(state,info){
            state.info = info;
        },
        refreshToken(state,token){
            state.token = token;
        },
        resetUser(state,user){
            state.user = user;
        },
        resetAddress(state,addresses){
            state.addresses = addresses;
        },
        resetCurrentAddress(state,address){
            state.address = address;
        }
    },
    actions:{
       async login({commit,dispatch},payload){
            let response = await post_json("/user/login",payload);
            let token = response.data.token;
            // 将token缓存起来，cookie，sessionStorage、localStorage
            // 2、通过token换取用户信息
            setToken(token)
            commit("refreshToken",token);
            await dispatch("Info",token)
        },
        async register({commit,dispatch},payload){
            let response = await post_array("/customer/saveOrUpdate",payload)
            return response;
        },
        async info({commit,dispatch},token){
            let result = await get("/user/info",{token});
            //将用户信息设置到info中
            commit("refreshInfo",result.data)
            await dispatch("findAddressByUserId",result.data.id)
        },
        // 根据顾客id找到地址信息
        async findAddressByUserId({commit,dispatch},id){
            let response = await get("/address/findByCustomerId?id="+id)
            dispatch("findAddressByUserId?id="+id)
            commit("resetAddress",response.data)
        },
        // 发现所有
        async findAddressAll({commit}){
            let response = await get("/address/findAll")
            commit("resetAddress",response.data)
        },
        // 根据id删除地址信息
        async deleteAddressByUserId({commit,dispatch},id){
            let response = await get("/address/deleteById?id="+id)
            dispatch("findAddressByUserId?id="+id)
            return response;
        },
        async SaveOrUpdateAddress({commit,dispatch},address){
            let response = await post_array("/address/saveOrUpdate",address)
            commit("resetAddress",response.data)
            return response;
        },
        async logout({commit}){
            await post("user/logout");
            removeToken();
            commit('refreshToken','');
            commit('refreshInfo',{});
        }
    }
}