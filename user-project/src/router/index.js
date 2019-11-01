import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from '../views/manager/Layout.vue'
import Home from '../views/manager/Home'
import OrderDatail from '../views/manager/OrderDatail'
import User from '../views/manager/User'
import EditUser from '../views/manager/EditAddress'
import productlist from '../views/manager/ProductList'
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path: '/', 
    name: 'manager',
    component: Manager,
    children:[{
      path:"home",
      component:()=>import("../views/manager/Home.vue")
    },{
      path:"OrderDatail",
      component:()=>import("../views/manager/OrderDatail.vue")
    },{
      path:"user",
      component:()=>import("../views/manager/User.vue")
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path:'/address',
    name:'address',
    component:()=>import('../views/manager/Address')
  },
  {
    path:"/EditAddress",
    name:'EditAddress',
    component:()=>import("../views/manager/EditAddress")
  },
  {
    path:"/productlist",
    name:'productlist',
    component:()=>import("../views/manager/ProductList")
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
