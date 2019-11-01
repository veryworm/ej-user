<template>
    <div class="login">
        <div class="header">
            <p>logo</p>
            <h3>家政服务平台-客户端</h3>
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
         <van-button plain hairline type="default" @click="loginHandler">登录</van-button>
         </div>
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
        }
    }
}
</script>
<style scoped>
    .header{
        background-color: rgb(123, 166, 179);
        text-align: center;
        height:150px;
        padding: 50px;
    }
    .header>p{
         color: aliceblue
    }
    .anniu{
        text-align: center
    }
</style>