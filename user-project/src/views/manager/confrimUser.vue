<template>
    <div class="conformorder">
        <van-steps :active="active">
        <van-step>注册</van-step>
        <van-step>注册完成</van-step>
        </van-steps>
        <div class="content" >
            注册成功！去登录吧
            <van-count-down
            :time="time"
            format="ss 秒"
            />
        </div>
        <div class="fh">
        <van-button type="info" @click="returnHandler">点击返回</van-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
             time:  60 * 60,
             active:1
        }
    },
    created(){
        returnHandler()
    },
    methods:{
        returnHandler(){
            setTimeout(()=>{
                this.$router.push({path:'/login'})
            },2000)
        }
    },
    
}
</script>
<style scoped>
    .content{
        color: rgb(68, 94, 95);
        font-size: 18px;
        position: absolute;
        left: 32%;
        top: 30%
    }
    .fh{
        position: absolute;
        left: 41%;
        top: 40%
    }
</style>