import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/tutorial',
    name: 'tutorial',
    component: () => import('../views/TutorialView.vue'),
    meta: { title: 'Tutorial' }
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('../views/CalendarView.vue'),
    meta: { title: 'Daily Summary' }
  },
  {
    path: '/rebate-article',
    name: 'rebateArticle',
    component: () => import('../views/RebateArticleView.vue'),
    meta: { title: 'Pengertian Rebate' }
  },
  {
    path: '/read/:slug/:id',
    name: 'articleDetail',
    component: () => import('../views/ArticleView.vue'),
    meta: { title: 'Blog' }
  },
  {
    path: '/admin-login',
    name: 'adminLogin',
    component: () => import('../views/AdminLoginView.vue'),
    meta: { title: 'Admin Login' }
  },
  {
    path: '/admin',
    name: 'adminPanel',
    component: () => import('../views/AdminPanelView.vue'),
    meta: { title: 'Admin Panel', requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' - Tradergenz();';
  
  // Check if route requires authentication
  if (to.meta.requiresAuth) {
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    
    if (isAuthenticated === 'true') {
      next(); // Allow access
    } else {
      next('/admin-login'); // Redirect to login
    }
  } else {
    next(); // Allow access to public routes
  }
});

export default router
