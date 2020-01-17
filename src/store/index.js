import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import order from './modules/order'
import category from './modules/category'
import product from './modules/product'
import shopcar from './modules/shopcar'

const store = new Vuex.Store({
 modules: {
    user,
    order,
    category,
    product,
    shopcar
 }
})

export default store
