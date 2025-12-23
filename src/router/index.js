import Vue from 'vue'
import VueRouter from 'vue-router'

import Register from '@/views/Register'
import Login from '@/views/Login'
import Layout from '@/views/Layout'
import Detail from '@/views/Detail'

import Article from '@/views/Article'
import Like from '@/views/Like'
import Collect from '@/views/Collect'
import User from '@/views/User'

import { getToken } from '../utils/storage'

Vue.use(VueRouter)
const whiteList = ['/register', '/login']
const router = new VueRouter({
  routes: [
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: '/article',
      children: [
        { path: '/article', component: Article },
        { path: '/like', component: Like },
        { path: '/collect', component: Collect },
        { path: '/user', component: User }
      ]
    },
    { path: '/article/:id', component: Detail }
  ]
})
router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {
    next()
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
