


import Login from '@/views/login/Login.vue'
import Main from '@/views/main/Main.vue'

import { createRouter, createWebHistory } from 'vue-router'




export const constantRoutes = [
  { path: '/login', component: Login },
  { path: '/main', component: Main }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

router.beforeEach((to, from, next) => {
  console.log(to.path)
  const authorization = document.cookie.includes('authorization');
  if (!authorization) {
    if(to.path !== '/login' ){
      console.log("未鉴权且不是登录页")
      next('/login');
    }
    else{
      console.log("未鉴权但是登录页")
      next();
    }    
  } else {
    if(to.path !== '/main' ){
      console.log("鉴权且不是主页")
      next('/main');
    }
    else{
      console.log("鉴权且是主页")
      next();
    } 
  }
})

export default router
