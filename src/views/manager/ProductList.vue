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
              <div class="one">
                <van-row v-for="p in productCustomerFilter(categoryId)" :key="p.id">
                    <van-col :span="4">
                        <img class="pp" width="70px" height="76px" v-if="p.photo" :src="p.photo" alt="">
                    </van-col>
                    <van-col :offset="4" :span="18">
                        <!-- <div class="left"> -->
                        <div> <strong>名称：</strong> {{p.name}}</div>
                        <div> <strong>价格：</strong> {{p.price}}</div>
                        <div> <strong>描述：</strong> {{p.description}}</div>
                        <div class="bianju"> <van-stepper v-model="value" /></div>
                        <!-- </div> -->
                    </van-col>
                </van-row>
              </div>
          </div>
        </van-col>
      </van-row>
      <van-submit-bar
        :price="3050"
        button-text="提交订单"
        />
    </div>
</template>
<script>
import {mapState, mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return {
            activeKey:0,
            categoryId:'',
            value:0
        }
    },
    computed:{
        ...mapState('category',['categories']),
        ...mapState('product',['products']),
        ...mapGetters('product',['productCustomerFilter'])
    },
    created(){
        this.findAllCategory()
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
        }
    }
}
</script>
<style scoped>
    .right-content{
        margin-left: 17px;
    }
    .one{
        border: 1px solid #ededed;
        font-size: 12px
    }
    .pp{
        border-radius: 20%;
    }
    .left{
        /* border-bottom: 1px solid rgb(236, 234, 234) */
    }
    .bianju{
        margin-left: 55%
    }
    .left div{
        margin-top: 10px;
    }
</style>