import { createRouter, createWebHistory } from 'vue-router'
import User from './components/User.vue'
import Entities from './components/Entity.vue'
import UserEntities from './components/UserEntity.vue'

const routes = [
  { path: '/', redirect: '/users' },
  { path: '/users', component: User },
  { path: '/entities', component: Entities },
  { path: '/userentities', component: UserEntities }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router