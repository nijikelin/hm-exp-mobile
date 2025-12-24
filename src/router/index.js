import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '../utils/storage'

const Layout = () => import('@/views/Layout')
const Login = () => import('@/views/Login')
const Detail = () => import('@/views/Detail')
const Article = () => import('@/views/Article')
const Register = () => import('@/views/Register')
const Like = () => import('@/views/Like')
const Collect = () => import('@/views/Collect')
const User = () => import('@/views/User')

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
