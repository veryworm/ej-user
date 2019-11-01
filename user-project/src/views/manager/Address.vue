<template>
    <div id="address">
        <div class="header">
            <van-nav-bar
            title="地址管理"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content">
            <van-address-list
            v-model="chosenAddressId"
            :list="addresses"
            @select="selectAddressHandler"
            @edit="editHandler"
            />
        </div>
       addresses: {{addresses}}
<!-- 地址脚部确认按钮 -->
            <van-button class="button" type="danger" size="large">确认</van-button>
    </div>
</template>
<script>
import {mapState, mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{
            chosenAddressId:1,
            form:{},
        }
    },
    created(){
        this.findAddressByUserId(this.$route.query.id)
    },
    computed:{
        ...mapState("user",["addresses"]),
        
    },
    methods:{
        ...mapActions("user",["findAddressByUserId"]),
        ...mapMutations("user",["resetCurrentAddress"]),
        onClickLeft(){
            this.$router.push({path:'user'})
        },
        selectAddressHandler(item){
            this.resetCurrentAddress(item)
        },
        editHandler(address){
            this.$router.push({path:'/EditAddress',query:{address}})
        }
    }
}
</script>
<style scoped>
.header{
    text-align: center;
    border-bottom: 1px solid #ccc;
}
button{
    position: fixed;
    bottom: 0;
    /* left: 0; */ 
}
</style>