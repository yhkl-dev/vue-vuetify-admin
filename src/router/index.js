import Vue from 'vue'
import Router from 'vue-router'
// import DashBoard from '@/views/dashboard/DashBoard'

Vue.use(Router)

const Layout = () => import('@/components/Layout/Layout')
const Login = () => import('@/views/login/Login')
const DashBoard = () => import('@/views/dashboard/DashBoard')

export const constantRouterMap = [
  {
    path: '/login',
    component: Login,
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: '',
      component: DashBoard,
      name: '首页',
      meta: { title: '首页', icon: 'dashboard', noCache: true }
    }]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
