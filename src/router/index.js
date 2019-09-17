import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    { path: '/', redirect: '/goods' },
    { path: '/goods', component: () => import('../pages/Goods') },
    { path: '/seller', component: () => import('../pages/Seller.vue') },
    { path: '/ratings', component: () => import('../pages/Ratings') }
  ]
})
export default routes
