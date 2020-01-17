<template>
    <div class="edit_address">
        <div class="header">
            <van-nav-bar
                title="添加地址信息"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
            />
        </div>
        <!-- 编辑地址 -->
        <div class="editaddress_message">
            <van-field v-model="form.telephone" label="手机号"/>
            <van-field v-model="address" label="地址" @click.prevent="showPopup"/>
                <van-popup v-model="show" position="bottom">
                        <van-area
                        :area-list="areaList"
                        :columns-placeholder="['请选择', '请选择', '请选择']"
                        @confirm="getparams"
                        @cancel = "quxiao"
                        />
                </van-popup>
            {{form}}
            {{address}}
            <van-button @click="submitHandler" type="danger" size="large">提交</van-button>
        </div>
    </div> 
</template>
<script>
import {mapState, mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{
             form:{customerId:26},
             show:false,
             address:[],
             areaList:{
                  province_list: {
                    110000: '北京市',
                    120000: '天津市',
                    130000: '太原市',
                    140000: '江苏市',
                    150000: '南京市',
                    160000: '长沙市',
                    170000: '厦门市',
                  },
                city_list: {
                    110100: '北京市',
                    110200: '县',
                    120100: '天津市',
                    120200: '县',
                    130100: '太原市',
                    130200: '县',
                    140100: '江苏市',
                    140200: '县',
                    150100: '南京市',
                    150200: '县',
                    160100: '长沙市',
                    160200: '县',
                    170100: '长沙市',
                    170200: '县'
                  },
                county_list: {
                    110101: '东城区',
                    110102: '西城区',
                    110105: '朝阳区',
                    110106: '丰台区',
                    120101: '和平区',
                    120102: '河东区',
                    120103: '河西区',
                    120104: '南开区',
                    120105: '河北区',
                    130101: '交城区',
                    130102: '清徐区',
                    130103: '南加庄区',
                    130104: '天宁区',
                    140101: '宝鸡区',
                    140102: '宝沙区',
                    140103: '光路区',
                    150101: '华安区',
                    150102: '华北区',
                    160101: '南部区',
                    160102: '北部区',
                    170101: '北狼区',
                    170102: '惠胡区',
                    // ....
                }
             }
        }
    },
    methods:{
            created(){
               
            },
            ...mapActions('user',['SaveOrUpdateAddress']),
            // 返回
            onClickLeft() {
                this.$router.push({path:'/address',query:{id:this.info.id}})
            },
            submitHandler(){
               this.SaveOrUpdateAddress(this.form)
               .then((response)=>{
                     this.$notify({type:'success',
                     message:'修改成功',
                    });
                this.$router.push({path:'/address',query:{id:this.info.id}})
               })
            },
            showPopup(){
                this.show = true;
            },
            getparams(response){
                this.form.province = response[0].name;
                this.form.city = response[1].name;
                this.form.area = response[2].name;
                this.address = response[0].name + "" + response[1].name + "" + response[2].name;
                this.show = false
            },
            quxiao(){
                this.show = false
            }
        },
         computed:{
        ...mapState('user',['addresses','info'])
        },
}
</script>
<style scoped>
    .shengfen{
        padding:7px 0 0 8px;
        font-size: 14px;
        line-height: 2.5em;
        width: 90px;
    }
    .xian{
        border-bottom: 1px solid #ededed
    }
    #xialakuang{
        /* border: 0 */
        width: 300px;
        margin-top: 12px;
        margin-left: 30px;
        border:0
    }
</style>