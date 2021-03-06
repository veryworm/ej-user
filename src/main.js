import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import moment from 'moment'
// 自定义组件
import ProductItem from './components/productitem'
import Productdatail from './components/productdatail'
Vue.component('briup-product-item',ProductItem)
Vue.component('whitewolf-comment',Productdatail)
// 全局注册过滤器
Vue.filter('datefmt',function(val){
  if(val){
     return moment(val).format('YYYY-MM-DD HH:mm:ss')
  }
    return val;  
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
