<template>
    <div class="order-confirm">
        <div class="header">
         <van-nav-bar
            title="确认订单"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
          />
        </div>
          <!-- 订单详情 -->
          <div class="total">
              <div v-for="address in addresses" :key="address.customerId" class="user-message">
                  <van-row>
                    <van-row>
                        <van-col :offset="5">姓名</van-col>
                        <van-col :offset="2">{{address.telephone}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col :offset="2"><van-icon name="location-o" color="red" size="33px" /></van-col>
                         <van-col :offset="1">
                             地址:{{address.province}}{{address.city}}{{address.area}}{{address.address}}
                        </van-col>
                    </van-row>
                  </van-row>
              </div>
              <!-- 订单 -->
              <div class="middle-body">
                  <div v-for="line of orderLines.values()" :key="line.productId" class="order-message">
                      <van-row>
                          <van-col :offset="2">
                              <span class="productname">{{line.productName}}</span>
                          </van-col>
                      </van-row>
                      <van-row>
                          <van-col :span="4" :offset="2">
                              <img src="../../.././assets/11-home.jpg" width="100%" height="80px" alt="">
                          </van-col>
                          <van-col :offset="12" :span="3">
                              <span class="productname">合计:{{line.number*line.price}}</span>
                          </van-col>
                          <van-row>
                              <van-col :offset="18">
                                  <span class="productname">数量:{{line.number}}</span>
                              </van-col>
                          </van-row>
                          <van-row>
                              <van-col :offset="6">
                              <span class="productname">￥{{line.price}}</span>
                             </van-col>
                              <van-col :offset="18">
                                  
                              </van-col>
                          </van-row>
                      </van-row>
                  </div>
              </div> 
          </div>
          <div class="right">
            <div class="one">
                <span>总计:</span>
                <span class="productname">{{total}}</span>
            </div>
            <div class="two">
                <button @click="shopping" class="red">立即购买</button>
            </div>
          </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    created(){
        // 查询当前顾客的地址
        this.findAddressByUserId(id);
    },
    computed:{
       ...mapState('shopcar',['orderLines']),
       ...mapState('user',['addresses']),
       ...mapGetters('shopcar',['total']),
    },
    methods:{
        ...mapActions('user',['findAddressByUserId']),
        ...mapActions('order',['saveOrder']),
         onClickLeft() {
            this.$router.go(-1)
         },
         shopping(){
             this.saveOrder()
             .then((response)=>{
                 this.$notify({type:'success',
                 message:'购买成功'
                 });
                 this.$router.push({path:'/OrderDatail'})
             })
         }
    }
}
</script>
<style scoped>
.van-nav-bar{
    background-color: rgba(255, 0, 0, 0.733);
}
.van-nav-bar .van-icon{
    color: #ffffff
}
.van-nav-bar__text{
    color: #ffffff
}
.van-nav-bar__title{
    color: #ffffff
}
.order-confirm {
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  font-size: 13px;
}
.user-message{
    margin-top: 8px;
    background: #ffffff;
    width:95%;
    margin-left: 10px;
    border-radius: 5px;
    padding:10px;
}
.order-message{
    margin-top: 8px;
    background: #ffffff;
    width:95%;
    margin-left: 10px;
    border-radius: 5px;
    padding:10px;
}
.order-confirm{
    background: #faf9f9
}
.productname{
    color:rgb(219, 56, 64) 
}
.right {
    z-index: 1;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    font-size: 13px;
    height: 50px;
}
.one{
    border: 1px solid #ededed;
    font-size: 12px;
    float: left;
    margin-left: 63%;
    padding-top: 15px;
    border: 0
}
.red{
    background: red;
    color: white;
    padding: 8px;
    border: 0;
    height: 50px;
    position:absolute;
    bottom: 0;
    right: 0;
}
</style>
