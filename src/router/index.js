import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views'),
    children: [
      {
        path: '/',
        component: () => import('../views/auth/Login.vue')
      },
      {
        path: '/admin',
        component: () => import('../views/admin'),
        children: [
          {
            path: 'admin/main',
            component: () => import('../views/admin/main.vue')
          }
        ]
      },
      {
        path: '/auth',
        component: () => import('../views/auth'),
        children: [
          {
            path: '/auth/join',
            component: () => import('../views/auth/Join.vue')
          }
        ]
      },
      {
        path: '/dashboard',
        component: () => import('../views/dashboard')
      },
      {
        path: '/user',
        component: () => import('../views/user')
      },
      {
        path: '/device',
        component: () => import('../views/device')
      }
    ]
  },
  {
    path: '*',
    component: () => import('../components/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
