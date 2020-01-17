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
        <!-- <div class="content"> -->
            <!-- <van-address-list
            v-model="chosenAddressId"
            :list="addresses"
            @select="selectAddressHandler"
            @edit="editHandler"
            @add="onAdd"
            /> -->
            <div class="one" v-for="data in addresses" :key="data.id">
                <van-row>
                    <van-col :offset="1" :span="3">
                        张三
                    </van-col>
                    <van-col :offset="1" :span="3">
                        {{data.telephone}}
                    </van-col>
                    <van-col :offset="12">
                        <van-icon name="edit" @click="editHandler(data)" />
                    </van-col>
                    <van-col>
                        <van-icon :offset="14" name="clear" @click="deleteHandler(data.id)" />
                    </van-col>

                </van-row>
                <van-row>
                    <van-col :offset="1">
                        <input type="checkbox" name="" id="">
                    </van-col>
                    <van-col :offset="3">
                       <span style="font-size:12px"> {{data.province}}{{data.city}}{{data.area}}</span>
                    </van-col>
                </van-row>
            </div>
            <van-button type="danger" size="large" @click="onAdd">新增地址</van-button>
        <!-- </div> -->
        
<!-- 地址脚部确认按钮 -->
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
        ...mapState("user",["addresses","info"]),
    },
    methods:{
        ...mapActions("user",["findAddressByUserId","deleteAddressByUserId"]),
        ...mapMutations("user",["resetCurrentAddress"]),
        onClickLeft(){
            this.$router.push({path:'user'})
        },
        selectAddressHandler(item){
            this.resetCurrentAddress(item)
        },
        editHandler(address){
            this.$router.push({path:'/EditAddress',query:{address,id:this.info.id}})
        },
        deleteHandler(id){
            this.deleteAddressByUserId(id)
            .then((response)=>{
                this.$notify({type:'success',
                message:'删除成功',
                });
            })
             this.$router.push({path:'user',query:{id:this.info.id}})
        },
        onAdd(){
            this.$router.push({path:'/addaddress',query:{id:this.info.id}})
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
.one{
    border: 1px solid #f7f3f3;
    padding: 10px 5px;
}
</style>