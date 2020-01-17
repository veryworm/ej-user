export default {
    namespaced:true,
    state:{
        // {productId,productName,price,number}
        orderLines:new Map()
    },
    getters:{
        // 添加购物车
        total(state){
            let result = 0;
            // 计算总额
            for(let orderLines of state.orderLines.values()){
                result += orderLines.price * orderLines.number
            }
            return result;
        },
    },
    mutations:{
        // 添加购物车{productId,productName,price,number}
        addShopCar(state,orderLine){
            // 如果订单项存在，修改number
                state.orderLines.set(orderLine.productId,orderLine);
                // 克隆对象，改变引用地址，目的是为了让监听事件监听到orderLines的改变  
                state.orderLines = _.clone(state.orderLines)
        }, 
        // 清空购物车
        clearShopCar(state){
            state.orderLines.clear();
            state.orderLines = _.clone(state.orderLines)
        }
    }   
}