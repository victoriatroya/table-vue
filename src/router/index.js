import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/dashboard/users/:id/todos',
      name: 'todo-details',
      component: () => import('../views/TodoDetailsView.vue'),
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !localStorage.getItem('loginData')) next({ name: 'login' })
   else next()
})

export default router
