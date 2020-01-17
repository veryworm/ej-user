<template>
    <div class="order">
        <router-view></router-view>
         <div>
            <van-tabbar v-model="active" @change="tabChangeHandler">
                <van-tabbar-item name="/home" icon="wap-home">首页</van-tabbar-item>
                <van-tabbar-item name="/OrderDatail" icon="shopping-cart">订单</van-tabbar-item>
                <van-tabbar-item name="/user" icon="manager">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    data(){
        return{
            active:0
        }
    },
    created(){
        if(this.token){
            this.getInfo(this.token);
        }else{
            this.$toast("token失效")
            // 跳转登录
            this.$router.push({path:'/login'})
        }
    },
    computed:{
        ...mapState('user',['token','info'])
    },
    methods:{
        ...mapActions(
            'user',
            {'getInfo':'info'}
        ),
        tabChangeHandler(path){
            // 跳转页面
            this.$router.push({path})
        }
    }
}
</script>
<style scoped>

</style>