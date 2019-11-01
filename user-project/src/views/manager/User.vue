<template>
    <div class="login">
        <div class="header">我的{{info.name}}</div>
            <div class="logo">
                <div class="tupian"><img style="border-radius:50%; width:100px; height:90px; padding:10px;" src="../../assets/home_23.png" alt=""></div>
                 <div class="welcome">欢迎您{{info.name}}</div>
        </div>
        <div>
          <van-cell @click="changeAddressHandler" title="常用地址" />
          <div style="text-align:center">
          <van-cell @click="logoutHandler" title="退出" />
          </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions("user",["logout"]),
        // 退出当前用户
        logoutHandler(){
            this.logout()
            .then(()=>{
                this.$router.push({path:'/login'})
            })
        },
        // 地址跳转
        changeAddressHandler(){
            this.$router.push({path:'/address',query:{id:this.info.id}})
        }
    },
    computed:{
    ...mapState("user",["info"])
    }
}
</script>
<style scoped>
    .header{
        text-align: center;
        line-height: 3rem;
        border-bottom: 1px solid #ccc
    }
    .tupian{
        border:1px solid #ccc;
        
        width: 130px;
        height: 120px;
        margin: 0 auto;
        border-radius: 50%;
        margin-top: 40px
    }
    .welcome{
        text-align: center
    }

</style>