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
        },
        {
          path: 'episodes',
          name: 'episodes',
          component: () => import('../views/EpisodesPage.vue')
        },
        {
          path: 'episodes/:id',
          name: 'episodeItem',
          component: () => import('../views/EpisodeItem.vue')
        }
      ]
    }
  ]
})

export default router
