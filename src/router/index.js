import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classics',
    name: 'Classics',
    component: () => import('../views/Classics.vue')
  },
  {
    path: '/herbs',
    name: 'Herbs',
    component: () => import('../views/Herbs.vue')
  },
  {
    path: '/formulas',
    name: 'Formulas',
    component: () => import('../views/Formulas.vue')
  },
  {
    path: '/diagnosis',
    name: 'Diagnosis',
    component: () => import('../views/Diagnosis.vue')
  },
  {
    path: '/acupuncture',
    name: 'Acupuncture',
    component: () => import('../views/Acupuncture.vue')
  },
  {
    path: '/cases',
    name: 'Cases',
    component: () => import('../views/Cases.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
