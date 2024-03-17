import { createRouter, createWebHistory } from 'vue-router'
import NavMain from '../views/NavMain.vue'
import NavModule from '../views/NavModule.vue'
import NavContact from '../views/NavContact.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: NavMain
  },
  {
    path: '/module',
    name: 'About',
    component: NavModule
  },
  {
    path: '/contact',
    name: 'Contact',
    component: NavContact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
