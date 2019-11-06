<template>
    <div class="userregister" >
        <van-nav-bar
        title="注册账号"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-steps :active="active">
        <van-step>注册</van-step>
        <van-step>填写手机号</van-step>
        <van-step>注册完成</van-step>
        </van-steps>
        <div v-if="active == 0">
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
                v-model="form.password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                requireds
            />
            <van-field
                v-model="form.qq"
                label="qq"
                placeholder="请输入QQ"
                requireds
            />
            <van-radio-group v-model="form.gender" @change="changeHandler">
            <van-radio name="男">男</van-radio>
            <van-radio name="女">女</van-radio>
            </van-radio-group>
         </van-cell-group>
          <div class="anniu">
             <van-button type="info" @click="nextstep" size="large">下一步</van-button>
          </div>
        </div>
         <div v-if="active == 1">
             <van-field
                v-model="form.telephone"
                required
                clearable
                label="电话号"
                right-icon="question-o"
                placeholder="请输入电话号"
            />
            <van-button type="info" @click="next" size="large">点击注册</van-button>
         </div>
         <div v-if="active == 2">
            <div class="content" >
                注册成功！去登录吧
                <van-count-down
                :time="time"
                format="ss 秒"
                />
                <div class="fh">
                    <van-button type="info" @click="returnHandler" >点击返回</van-button>
                </div>
            </div>
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
            },
            active:0,
            radio:'男',
            time:  60 * 60
        }
    },
    created(){
        
    },
    methods:{
        ...mapActions('user',['register']),
       nextstep(){
           this.active++;
       },
       next(){
           console.log(this.form)
           this.register(this.form)
           .then(()=>{
               this.active++
               this.returnHandler()
           })
       },
       changeHandler(s){
           console.log(s)
       },
       returnHandler(){
            setTimeout(()=>{
                this.$router.push({path:'/login'})
            },4000)
       },
       onClickLeft(){
           this.$router.go(-1)
       }
    }
}
</script>
<style scoped>
    .content{
        margin-left: 38%
    }
</style>