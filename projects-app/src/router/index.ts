import ProjectsLayout from '@/modules/projects/layouts/ProjectsLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProjectsLayout,
      children: [
        {
          path: '',
          name: 'projects',
          component: () => import('@/modules/projects/views/ProjectsView.vue'),
        },
      ],
    },
  ],
})

export default router
