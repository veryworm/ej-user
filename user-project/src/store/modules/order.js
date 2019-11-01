import {post_json, get, post} from '../../http/axios'
export default {
    namespaced:true,
    state: {
        orders:[]
    },
    getters:{
        OrderFilters(state){
            return (status)=>{
                 return state.orders.filter(item=>item.status === status)
            }
        }
    },
    mutations: {
        LoadAllOrder(state,orders){
            state.orders = orders
        }
    },
    actions: {  
        async findAllOrder({commit}){
            let response = await get("order/query?waiterId=")
            commit("LoadAllOrder",response.data)
        }
    }
}