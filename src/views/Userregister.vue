<template>
    <div class="userregister">
        <van-steps :active="active">
        <van-step>用户注册</van-step>
        <van-step>商家接单</van-step>
        </van-steps>
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
            <van-field
                v-model="form.telephone"
                label="手机号"
                placeholder="请输入手机号"
                required
            />
            <van-field
                v-model="form.qq"
                label="qq"
                placeholder="请输入QQ"
                required
            />
             <van-field
                v-model="form.wx"
                label="wx"
                placeholder="请输入微信号"
                required
            />
         </van-cell-group>
         <div class="anniu">
         <van-button type="info" size="large" @click="loginHandler">登录</van-button>
         </div>
         <van-row style="margin-top:10px;">
             <van-col :span="4" :offset="18"><a @click.prevent="registerHandler" href="">用户注册</a></van-col>
         </van-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{},
            active:'1'
        }
    }
}
</script>
<style scoped>

</style>