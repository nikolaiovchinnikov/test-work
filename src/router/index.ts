import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../layout/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'indexPage',
          component: () => import('../views/IndexPage.vue')
        },
        {
          path: 'character/:id',
          name: 'character',
          component: () => import('../views/InformationCharacter.vue')
        }
      ]
    }
  ]
})

export default router
