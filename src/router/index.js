import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import HistoryView from "@/views/historyView.vue";
import  FormView from "@/views/FormView.vue";
import  FormHistory from "@/views/HistoryForm.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView
  },
  {
    path: '/form',
    name: 'FormView',
    component: FormView
  },
  {
    path: '/historyform',
    name: 'HistoryForm',
    component: FormHistory
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
