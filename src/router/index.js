import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MainPage.vue'
import Articles from '../views/AllArticles.vue'
import Create from '../views/CreateArticle'
import Edit from '../views/EditArticle'
import Article from '../views/Article'
import Manage from '../views/Manage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/all',
    name: 'all',
    component: Articles
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit
  },
  {
    path: '/:id',
    name: 'id',
    component: Article
  },
  {
    path: '/manage',
    name: 'manage',
    component: Manage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
