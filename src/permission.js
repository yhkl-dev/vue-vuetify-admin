import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from '@/utils/auth' // getToken from cookie

NProgress.configure({ showSpinner: false })// NProgress Configuration

const whiteList = ['/login']// no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if (getToken()) { // determine if there has token
    /* has token */
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.username === '') {
        // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(() => { // 拉取user_info
          next({ ...to, replace: true })
        }).catch(err => {
          console.log(err)
          store.dispatch('FedLogOut').then(() => {
            console.log('Verification failed, please login again')
            next({ path: '/login' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    /* has no token */
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
