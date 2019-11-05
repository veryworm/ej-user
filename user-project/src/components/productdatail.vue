<template>
     <div class="whitewolf-comment">
            <div class="tupian">
                {{data}}
            </div>
            <div>
            <van-row>
                <van-col :span="5" :offset="1">
                    <span>双十一狂欢价</span>
                </van-col>
                <van-col :offset="16">
                    <span>双十一来啦</span>
                </van-col>
            </van-row>
            <van-row>
                <van-col></van-col>
            </van-row>
            </div>
    </div>    
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    props:['data'],
    methods:{
        
    }
}
</script>
<style lang="stylus">

</style>