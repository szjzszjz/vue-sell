import Vue from 'vue'
import Home from '@/pages/home/Home'
import Goods from '@/pages/goods/Goods'
import Seller from '@/pages/seller/Seller'
import Ratings from '@/pages/ratings/Ratings'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }, {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }, {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    }
  ],
  mode: 'history'
})
