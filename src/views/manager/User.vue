<template>
    <div class="login">
        <div class="header">我的{{info.name}}</div>
            <div class="logo">
                    <van-row>
                        <van-col :span="4" :offset="1">
                            <img style=" border-radius:10px" width="80px"  src="../../assets/header.jpg" alt="">
                        </van-col>
                        <van-col :span="4" :offset="2" style="margin-top:12px">
                            <span style="font-weight:bold; font-size:17px">{{info.name}}</span>
                        </van-col>
                    </van-row>
            </div>
        <div style="margin-top:10px">
          <van-cell @click="changeAddressHandler" icon="location-o" title="常用地址" />
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
    .login{
        height: 1000px;
        background: rgb(248, 245, 245);
    }
    .logo{
        background: white;
        padding:15px 10px
    }
    .header{
        text-align: center;
        line-height: 3rem;
        border-bottom: 1px solid #ccc;
        background: white
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