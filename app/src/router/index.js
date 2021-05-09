import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TokaApp from '@/views/TokaApp.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  ,
  {
    path: '/app',
    name: 'TokaApp',
    component: TokaApp,
    beforeEnter: (to, from, next) => {
      const exist =  store.getters.users.length && store.getters.cities.length && store.getters.criteria.length
      if(exist) {
        next()
      }else {
        next({name:'Home'})
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
