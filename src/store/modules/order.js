import { get,post_obj_array} from '../../http/axios'
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
        // 保存订单信息
        async saveOrder({commit,rootState}){
            // 组合数据
            let data = {
                customerId:rootState.user.info.id,
                addressId:rootState.user.addresses[0].id,
                orderLines:Array.from(rootState.shopcar.orderLines.values())
            }
            // 调用后台接口完成保存
            let response = await post_obj_array('/order/save',data)
            // 3.清空购物车(order -> shopcar)
            commit('shopcar/clearShopCar',null,{root:true})
            return response;
        },
        // 已收货
        async confirmOrder({commit},id){
            console.log(id)
            await get('/order/confirmOrder',{orderId:id})
        },
        async findAllOrder({commit,rootState}){
            let customerId = rootState.user.info.id;
            let response = await get("order/query?",{customerId})
            commit("LoadAllOrder",response.data)
        } 
    }
}