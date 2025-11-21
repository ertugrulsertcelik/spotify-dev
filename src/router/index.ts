import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/sign-in'
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../views/SignInView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/header',
      name: 'header',
      component: () => import('../views/HeaderView.vue'),
    },
    {
      path: '/slider',
      name: 'slider',
      component: () => import('../views/SliderView.vue'),
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/CategoryView.vue'),
    },
    {
      path: '/footer',
      name: 'footer',
      component: () => import('../views/FooterView.vue'),
    },
  ],
})

export default router
