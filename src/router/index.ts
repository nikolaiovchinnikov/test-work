import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/IndexPage.vue')
    },
    {
      path: '/person/:id',
      name: 'person',
      component: () => import('../views/InformationCard.vue')
    }
  ]
})

export default router
