import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  /* mode: 'history', */
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../views/home/Home.vue')
    },
    {
      path: '/new',
      component: () => import('../views/new/New.vue')
    },
    {
      path: '/anniversary',
      component: () => import('../views/anniversary/Anniversary.vue')
    },
    {
      path: '/bookshelf',
      component: () => import('../views/bookshelf/BookShelf.vue')
    },
    {
      path: '/my',
      component: () => import('../views/my/My.vue')
    },
  ]
})
