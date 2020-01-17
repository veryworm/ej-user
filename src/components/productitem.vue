<template>
  <div class="product_item">
        <van-row style="border-radius:3px; background:white; padding:10px; width:279px">
        <van-col :span="4">
            <img v-if="data.photo" :src="data.photo"  @click="ToDetail(data)" width="72px" height="76px" alt="">
            <img v-else src="../assets/10-home.jpg" @click="ToDetail(data)"  width="72px" height="76px" alt="">
        </van-col>
        <van-col :offset="4" :span="16">
            <div> <strong>名称：</strong> {{data.name}}</div>
            <div> <strong>价格：</strong> {{data.price}}</div>
            <div> <strong>描述：</strong> {{data.description}}</div>
            <div style="margin-left:73px"> <van-stepper v-model="data.number" @change="numberChangeHandler(data)" /> </div>
        </van-col>
        </van-row>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props:['data'],
  data(){
    return {
      value:0,
    }
  },
  methods:{
      ...mapMutations('shopcar',['addShopCar']),
       ToDetail(product){
            this.$router.push({
              path:'/product_details',
              query:{product}
            })
       },
       numberChangeHandler(val){
            let orderLine = {
                productId:val.id,
                productName:val.name,
                price:val.price,
                number:val.number
            }
            console.log(orderLine);
            this.addShopCar(orderLine);
       }
  }
}
</script>
<style scoped>

.product_item {
    margin: .5em 1em;
    padding: .5em;
    border-radius: 5px;
    height: 80px;
    background: #f7f5f5;
    font-size: 13px;
}
.product_item img {
  /* width: 100%; */
  border-radius: 3px;
}

</style>