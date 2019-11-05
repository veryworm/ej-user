<template>
    <div class="order">
        <div class="header">我的订单</div>
        <div class="content">
            <div class="content-header">
<!-- tab标签栏 -->                
                <van-tabs v-model="active">
                    <van-tab title="全部订单">
                        <div>
                        <ul>
                            <li class="orders" v-for="o in orders" :key="o.id">
                                <van-row>
                                    <van-col :span="8">
                                        <p style="padding-left:15px">订单编号{{o.id}}</p>
                                    </van-col>
                                    <van-col :offset="12" :span="4">
                                        <p class="status">{{o.status}}</p>
                                    </van-col>
                                </van-row>
                                <van-row>
                                <van-col :span="6">
                                    <img width="100px" height="100px" src="../../../assets/home_21.png" alt="">
                                </van-col>
                                <van-col :span="14">
                                    <p class="title"><van-icon name="clock-o" />下单时间：{{o.orderTime | datefmt}}</p>
                                    <p class="price"><van-icon name="gold-coin-o" />总额：￥{{o.total}}</p>
                                </van-col>
                                <van-col :offset="12" :span="6">
                                         共计 个服务 
                                </van-col>
                                </van-row>
                                <van-row>
                                    <van-col :span="5" :offset="18">
                                        <span class="price"><van-icon name="balance-o" />合计{{o.total}}</span> 
                                    </van-col>
                                </van-row>
                            </li>
                        </ul>
                    </div>
                </van-tab>
                    <van-tab title="未付款">
                       
                    </van-tab>
                    <van-tab title="未服务">
                        内容 3
                    </van-tab>
                    <van-tab title="待确认">
                         <ul class="order-sort">
                            <li class="orders" v-for="o in orders" :key="o.id">
                                <div v-if="o.status === '待确认'">
                                    <van-row>
                                        <van-col :span="8">
                                            <p style="padding-left:15px">订单编号{{o.id}}</p>
                                        </van-col>
                                        <van-col :offset="12" :span="4">
                                            <p class="status">{{o.status}}</p>
                                        </van-col>
                                    </van-row>
                                    <van-row>
                                    <van-col :span="6">
                                        <img width="100px" height="100px" src="../../../assets/home_21.png" alt="">
                                    </van-col>
                                    <van-col :span="14">
                                        <p class="title">下单时间：{{o.orderTime | datefmt}}</p>
                                        <p class="price">总额：￥{{o.total}}</p>
                                    </van-col>
                                    </van-row>
                                    <van-col :offset="15">
                                         共计 个服务 <span class="price">合计{{o.total}}</span>  
                                    </van-col>
                                    <van-row>
                                        <van-col :offset="19">
                                            <van-button @click="hadsuccess(o.id)" size="small" type="danger">确认收货</van-button>
                                        </van-col>
                                    </van-row>
                                </div>
                            </li>
                         </ul>
                    </van-tab>
                     <van-tab title="已完成">
                    <ul>
                        <li class="orders" v-for="o in orders" :key="o.id">
                            <div v-if="o.status === '已完成'">
                                <van-row>
                                    <van-col :span="8">
                                        <p style="padding-left:15px">订单编号{{o.id}}</p>
                                    </van-col>
                                    <van-col :offset="12" :span="4">
                                        <p class="status">{{o.status}}</p>
                                    </van-col>
                                </van-row>
                                <van-row>
                                <van-col :span="6">
                                    <img width="100px" height="100px" src="../../../assets/home_21.png" alt="">
                                </van-col>
                                <van-col :span="14">
                                    <p class="title">下单时间：{{o.orderTime | datefmt}}</p>
                                    <p class="price">总额：￥{{o.total}}</p>
                                </van-col>
                                <van-col :offset="10">
                                        共计 个服务 <span class="price">合计{{o.total}}</span> 
                                </van-col>
                                </van-row>
                                 
                            </div>
                        </li>
                    </ul>
                    </van-tab>
                </van-tabs>
<!-- tab标签栏// -->                
            </div>
<!-- 订单body部分 -->
            <div class="content-body">
                
            </div>
<!-- 订单body部分// -->
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import {mapState, mapMutations,mapActions, mapGetters} from 'vuex'
export default {
    data(){
        return {
            active:0
        }
    },
    created(){
        this.findAllOrder()
        // 栏目名称
        this.findAllCategory()
    },
    computed:{
        ...mapState("order",["orders"]),
        ...mapState("category",["categories"]),
        ...mapGetters("order",["OrderFilters"])
    },
    methods:{
        ...mapActions("category",["findAllCategory"]),
        ...mapActions("order",["findAllOrder","confirmOrder"]),
        hadsuccess(id){
            this.confirmOrder(id)
            .then(()=>{
                this.findAllOrder();
            })
        }
    }
}
</script>
<style scoped>
    .header{
        text-align: center;
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
        font-size: 16px;
    }
    
    .title, .price, .status{
        font-size: 12px;
    }
    .price{
        color: orangered
    }
    .status{
        color: orangered
    }
    .order{
        font-size: 12px;
    }
    .orders{
        border-bottom: 1px solid rgb(248, 245, 245)
    }
</style>