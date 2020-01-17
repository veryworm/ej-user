import Vue from 'vue'
import VueRouter from 'vue-router'
// 管理路径页面
import Manager from '../views/manager/Layout.vue'
// 登录页面
import {getToken} from '../utils/auth'
import store from '../store'
import { Toast } from 'vant'
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/login"
  },
  {
    path: '/', 
    name: 'manager',
    component: Manager,
    beforeEnter: (to,from,next) => {
      let token = getToken();
      if(token){
        store.dispatch('user/info',token)
        .then(()=>{
          // 获取到用户后再跳转
          next();
        })
      }else{
          Toast("token失效")
          // 跳转到登录
          next({path:'/login'})
      }
    },
    children:[{
      path:"home",
      component:()=>import("../views/manager/Home.vue")
    },{
      path:"user",
      component:()=>import("../views/manager/User.vue")
    },
    {
      path:"OrderDatail",
      component:()=>import("../views/manager/ordersum/OrderDatail.vue")
    }]
  },
  {
      path:"OrderConfirm",
      component:()=>import("../views/manager/ordersum/OrderConfirm.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/userregister',
    component: () => import('../views/manager/Userregister.vue')
  },
  {
    path:'/address',
    name:'address',
    component:()=>import('../views/manager/addresssum/Address')
  },
  {
    path:'/addaddress',
    name:'addaddress',
    component:()=>import('../views/manager/addresssum/Addaddress')
  },
  {
    path:"/EditAddress",
    name:'EditAddress',
    component:()=>import("../views/manager/addresssum/EditAddress")
  },
  {
    path:"/productlist",
    component:()=>import("../views/manager/productsum/ProductList")
  },
  {
    path:"/product_details",
    component:()=>import("../views/manager/productsum/productDetails")
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
