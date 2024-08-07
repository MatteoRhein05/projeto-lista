import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/lista',
      name: 'Lista de compra',
      component: () => import('../views/ListaComprasView.vue')
    },
    {
      path: '/listaRefatorada',
      name: 'Lista de compra Refatorada',
      component: () => import('../views/ListaComprasRefatoradaView.vue')
    },
    {
      path: '/testeAxios',
      nome: '/Teste AXIOS',
      component:()=>import('../views/TesteAxiosView.vue')
    }
  ]
})

export default router
