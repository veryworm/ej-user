<template>
    <div class="product_details">
        <van-nav-bar
            title="产品详情"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
          />
       <div class="content">
            <div class="tupian">
                <img v-if="productmessage.photo" :src="productmessage.photo" width="100%" height="100%" alt="">
                <img v-else src="../../../assets/11-home.jpg" width="100%" height="100%" alt="">
                
            </div>
                <div class="kh">
                    <van-row>
                        <van-col :span="6" :offset="1">
                            <span>双十一狂欢价</span>
                        </van-col>
                        <van-col :span="6" :offset="18">
                            <span style="font-weight:bold">双十一来啦</span>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col :offset="1" :span="6">
                            <span style="font-size:24px">{{productmessage.price}}</span><span>起</span>
                        </van-col>
                        <van-col :offset="12">
                            <span>11月11日</span>
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col :offset="16">
                            00:00下单打两折
                        </van-col>
                    </van-row>
                </div>
                <van-row>
                    <van-col :offset="1">
                      <span style="font-size:24px; color:orange;">${{productmessage.price}}起</span>
                    </van-col>
                </van-row>
                <van-row>
                    <van-col :offset="1" :span="3">
                         <div class="jp">家净</div>
                    </van-col>
                    <van-col :offset="1" :span="10">
                        <span style="font-weight:bold">{{productmessage.name}}</span>
                    </van-col>
                </van-row>
            </div>
            <van-goods-action>
            <van-goods-action-button type="danger" text="立即购买" @click="ToOrderConfirm" />
            </van-goods-action>
    </div>
</template>
<script>
export default {
    data(){
        return {
            productmessage:{}
        }
    },
    created(){
        console.log("当前路由",this.$route);
        this.productmessage = this.$route.query.product;
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        ToOrderConfirm(){
            this.$router.push({path:'OrderConfirm'})
        }
    },
    computed:{

    }
}
</script>
<style scoped>
.product_details {
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
}
.tupian{
    height: 250px;
    width: 100%;
}
.kh{
     background: linear-gradient(red, rgb(214, 68, 112));
     color: #ffffff
}
.jp{
    background: red;
    text-align: center;
    border-radius: 8px;
    float: left;
    padding: 1px 3px;
    color:white
}
</style>