import HomeView from '@/modules/landing/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/views/FeaturesView.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/views/PricingView.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/views/ContactView.vue'),
          path: '/features',
        },
      ],
    },
    // Auth
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/views/LoginView.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/views/RegisterView.vue'),
        },
      ],
    },
  ],
});

export default router;
