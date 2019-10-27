import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Layout = () => import('@/components/Layout/Layout')
const Login = () => import('@/views/login/Login')
const DashBoard = () => import('@/views/dashboard/DashBoard')
const ErrorPage = () => import('@/views/Page404')

const UserList = () => import('@/views/users/UserList')
const GroupList = () => import('@/views/users/GroupList')

const GroupPermissionList = () => import('@/views/users/GroupPermissionList')

export const constantRouterMap = [
  {
    path: '/login',
    component: Login,
    hidden: true
  },
  {
    path: '/404',
    component: ErrorPage,
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
  },
  {
    path: '/users',
    component: Layout,
    redirect: '/users/list',
    name: '用户管理',
    meta: {
      title: '用户管理',
      icon: 'user'
    },
    children: [
      {
        path: 'list',
        component: UserList,
        name: '用户列表',
        meta: { title: '用户列表', icon: 'user' }
      },
      {
        path: 'group',
        component: GroupList,
        name: '角色',
        meta: { title: '角色', icon: 'solution' }
      },
      {
        path: 'group/groupPermission',
        component: GroupPermissionList,
        name: '权限列表',
        meta: { title: '权限列表', icon: 'user' },
        hidden: true
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
