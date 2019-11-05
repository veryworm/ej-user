<template>
    <div class="userregister" >
        <van-steps :active="active">
        <van-step>注册</van-step>
        <van-step>注册完成</van-step>
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
                v-model="form.realname"
                required
                clearable
                label="真实名字"
                right-icon="question-o"
                placeholder="请输入真实名字"
            />

            <van-field
                v-model="form.telephone"
                required
                clearable
                label="电话号"
                right-icon="question-o"
                placeholder="请输入电话号"
            />

            <van-field
                v-model="form.password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                requireds
            />
         </van-cell-group>
         <div class="anniu">
         <van-button type="info" @click="next" size="large">点击注册</van-button>
         </div>
         {{form}}
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            form:{
                type:'customer'
            },
            active:0
        }
    },
    methods:{
        ...mapActions('user',['register']),
       next(){
           this.register(this.form)
           .then(()=>{
               this.active++;
               setTimeout(()=>{
                   this.$router.push({path:'/confrimUser'})
               },3000)
           })
       },
    }
}
</script>
<style scoped>

</style>