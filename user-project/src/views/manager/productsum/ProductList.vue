<template>
    <div class="productlist">
        <van-nav-bar
        title="产品列表"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
      <van-row>
        <!-- 侧边导航 -->
        <van-col :span="4">
          <van-sidebar v-model="activeKey">
            <van-sidebar-item @click="categoryId = c.id" :title="c.name" v-for="c in categories" :key="c.id" />
           
          </van-sidebar>
        </van-col>
        <!-- 右侧产品 -->
        <van-col :span="20">
          <div class="right-content">
                <van-row>
                    <van-col :offset="1" :span="19">
                        <div class="left">
                            <briup-product-item v-for='p in productCustomerFilter(categoryId)' :key="p.id" :data='p'></briup-product-item>
                        </div>
                    </van-col>
                </van-row>
          </div>
        </van-col>
      </van-row>
        <div class="right">
            <div class="one">
                <span>总计:</span>
                <span class="k">{{total}}</span>
            </div>
            <div class="two">
                <button @click="ToSubmit" class="red">加入购物车</button>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState, mapActions,mapGetters} from 'vuex'
import _ from 'lodash'
export default {
    data(){
        return {
            activeKey:0,
            categoryId:'',
            value:3
        }
    },
    computed:{
        ...mapState('category',['categories']),
        ...mapState('product',['products']),
        ...mapGetters('product',['productCustomerFilter']),
        ...mapGetters('shopcar',['total']),
        ...mapState('user',['info'])
    },
    created(){
        this.findAllCategory();
        // 查询产品信息
        this.queryProduct({page:0,pageSize:100});
        this.categoryId = this.$route.query.id;
        this.activeKey = this.$route.query.index
    },
    methods:{
        ...mapActions('category',['findAllCategory']),
        ...mapActions('product',['queryProduct']),
        onClickLeft(){
            this.$router.go(-1)
        },
        ToSubmit(){
            this.$router.push({path:'/OrderConfirm',query:{id:this.info.id}})
           
        }
    }
}
</script>
<style scoped>
    .productlist{
        background: #faf9f9;
    }
    .pp{
        border-radius: 20%;
    }
    .bianju{
        margin-left: 55%
    }
    .left div{
        margin-top: 10px;
    }
    .right {
        z-index: 2;
        position: absolute;
        bottom: 0;
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
    .k{
         color:red;
         font-size: 16px;
    }
</style>