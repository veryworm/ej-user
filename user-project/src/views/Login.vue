<template>
    <div class="login">
        <div class="header">
            <div><img width="100%" src=".././assets/logo1.png" alt=""></div>
            <div class="logo-img">家净服务平台</div>
        </div>
        <!-- 表单 -->
        <van-cell-group>
            <van-field
                v-model="form.username"
                required
                clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
            />

            <van-field
                v-model="form.password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
            />
         </van-cell-group>
         <div class="anniu">
         <van-button type="info" size="large" @click="loginHandler">登录</van-button>
         </div>
         <van-row style="margin-top:10px;">
             <van-col :span="4" :offset="17"><a @click.prevent="registerHandler" href="">用户注册</a></van-col>
         </van-row>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            form:{
                type:'customer'
            }
        }
    },
    methods:{
        ...mapActions("user",["login"]),
        loginHandler(){
            this.login(this.form)
            .then(()=>{
                // 跳转到首页
                this.$router.push({path:"home"})
            })
        },
        registerHandler(){
            this.$router.push({path:"/userregister"})
        },
    }
}
</script>
<style scoped>
    .logo-img{
        font-size:24px;
        z-index: 1;
        top:22%;
        left: 35%;
        position:absolute;
        color: aliceblue
    }
    .header>p{
         color: aliceblue
    }
    .anniu{
        text-align: center
    }
    a{
        color:rgb(137, 179, 219)
    }
</style>