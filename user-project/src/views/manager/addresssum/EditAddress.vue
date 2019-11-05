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
                      <option>内蒙古</option>
                      <option>山西省</option>
                      <option>上海市</option>
                      <option>天津市</option>
                      <option>苏州市</option>
                      <option>江苏省</option>
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
                      <option>巴城镇</option>
                      <option>010艺术区</option>
                      <option>古洛路</option>
                      <option>西城大道</option>
                      <option>黄塔寺</option>
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
            <van-button size="large" @click="submitHandler" type="danger">提交</van-button>
        </div>
    </div> 
</template>
<script>
import {mapState, mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{
             form:{},
            
        }
    },
    computed:{
         ...mapState("user",["info"])
    },
    methods:{
            ...mapActions('user',['SaveOrUpdateAddress']),
            // 返回
            onClickLeft() {
                this.$router.push({path:'/address',query:{id:this.info.id}})
            },
            submitHandler(){
               this.SaveOrUpdateAddress(this.form)
               .then((response)=>{
                    this.$notify({type:'success',
                    message:'保存成功',
                    duration: 1000
                    });
                   this.$router.push({path:'/address',query:{id:this.info.id}})
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