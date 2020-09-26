import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/'
import Javascript from '../views/Javascript/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/javascript',
    name: 'Javascript',
    component: Javascript
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
