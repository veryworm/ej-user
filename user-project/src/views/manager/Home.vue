<template>
  <div class="home">
    <p>首页</p>
    <!-- 轮播 -->
    <div class="top">
     <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="../../assets/10-home.jpg" height="250px" width="100%" alt=""></van-swipe-item>
      <van-swipe-item><img src="../../assets/11-home.jpg" height="250px" width="100%" alt=""></van-swipe-item>
      <van-swipe-item><img src="../../assets/12-home.jpg" height="250px" width="100%" alt=""></van-swipe-item>
    </van-swipe>
    
    </div>
    <!-- ProductList -->
      <van-grid :column-num="3">
        <van-grid-item
          @click="ToLoadCategory(c.id,index)"
          v-for="(c,index) in categories"
          :key="c.id"
          :icon="c.icon"
          :text="c.name"
        />
      </van-grid>
      
       <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <img style="width:120px; height:83px" src="../../assets/10-home.jpg" alt="">
        </van-grid-item>
        <van-grid-item>
          <img style="width:120px; height:83px" src="../../assets/11-home.jpg" alt="">
        </van-grid-item>
        <van-grid-item>
          <img style="width:120px; height:83px" src="../../assets/12-home.jpg" alt="">
        </van-grid-item>
      </van-grid>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  data(){
    return {
      images: [
        
        '../../assets/12-home.jpg',
        '../../assets/12-home.jpg'
      ]
    }
  },
  computed:{
    ...mapState("user",["info"]),
    ...mapState("category",["categories"])
  },
  created(){
    this.findAllCategory()
  },
  methods:{
    ...mapActions("category",["findAllCategory"]),
    ToLoadCategory(id,index){
      this.$router.push({path:'/productlist',query:{id,index}})
    }
  }
}
</script>
<style scoped>

p{
  text-align: center;
  line-height: 1rem
}
.home{
  border-bottom: 1px solid #ccc
}
.tupian{
  width: 100%;
  height: 100%;
}

</style>