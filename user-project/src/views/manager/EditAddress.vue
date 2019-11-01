<template>
    <div class="edit_address">
        <div class="header">
            <van-nav-bar
                title="修改地址信息"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
            />
        </div>
        <!-- 编辑地址 -->
        <div class="editaddress_message">
           <form :model="form">
            <div>
                <van-row>
                    <van-col span="4"><div class="shengfen"> <span style="color:red">*</span>姓名</div></van-col>
                    <van-col span="8">
                        <input v-model="form.name" type="text" name="" id="xialakuang">
                    </van-col>
                </van-row>
            </div>

             <div>
                <van-row>
                    <van-col span="4"><div class="shengfen"> <span style="color:red">*</span>手机号</div></van-col>
                    <van-col span="8">
                        <input v-model="form.telephone" type="text" name="" id="xialakuang">
                    </van-col>
                </van-row>
            </div>

            <div class="xian">
            <van-row>
                <van-col span="4"><div class="shengfen"> <span style="color:red">*</span> 省份</div></van-col>
                <van-col span="8">
                    <select v-model="form.province" name="" id="xialakuang" placeholder="请选取省份">
                      <option>{{form.province}}</option>
                      <option>北京省</option>
                    </select>
                </van-col>
            </van-row>
             </div>

            <div class="xian">
            <van-row>
                <van-col span="4"><div class="shengfen"> <span style="color:red">*</span>区</div></van-col>
                <van-col span="8">
                    <select v-model="form.area" name="" id="xialakuang" placeholder="请选取区域">
                      <option>{{form.area}}</option>
                      <option>798艺术区</option>
                    </select>
                </van-col>
            </van-row>
            </div>

             <div class="xian">
            <van-row>
                <van-col span="4"><div class="shengfen"> <span style="color:red">*</span>详细地址</div></van-col>
                <van-col span="8">
                    <input v-model="form.address" type="text" name="" id="xialakuang">
                </van-col>
            </van-row>
            </div>

            </form>
            <van-button @click="submitHandler" type="info">提交</van-button>
        </div>
            <!-- <van-address-edit
            :area-list="areaList"
            :model="form"
            show-delete
            @save="onSave"
            @delete="onDelete"
            @change-area="changearea"
            @change-detail="changedetail"
            /> -->
        {{form}}-----
        {{areaList.province_list}}
    </div> 
</template>
<script>
import {mapState, mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{
             form:{},
             areaList:{
                province_list: {
                    110000: '北京市',
                    120000: '天津市'
                },
                city_list: {
                    110100: '北京市',
                    110200: '县',
                    120100: '天津市',
                    120200: '县'
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
                    // ....
                }
             }
        }
    },
    computed:{

    },
    methods:{
            ...mapActions('user',['SaveOrUpdateAddress']),
            // 返回
            onClickLeft() {
                this.$router.push({path:'/address'})
            },
            onSave() {
            Toast('save');
            },
            onDelete() {
            Toast('delete');
            },
            changedetail(){
                alert(1)
            },
            changearea(){
                alert(1)
            },
            submitHandler(){
               this.SaveOrUpdateAddress(this.form)
               .then((response)=>{
                      this.$message({type:"success",message:response.statusText});
               })
            }
        },
        created(){
            this.form = this.$route.query.address;
        }
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