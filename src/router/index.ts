import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs  from "../components/Tabs.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        component: () => import('../views/HomePage.vue'),
      },
      {
        path: 'counter',
        component: () => import('../views/CounterPage.vue'),
      },
      {
        path: 'vuetify',
        component: () => import('../views/VuetifyPage.vue')
      },
      {
        path: 'cards',
        component: () => import('../views/VuetifyComponents/Card.vue')
      },
      {
        path: 'dialogs',
        component: () => import('../views/VuetifyComponents/Dialog.vue')
      },
      {
        path: 'expansion-panel',
        component: () => import('../views/VuetifyComponents/ExpansionPanel.vue')
      }
    ],
  }
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
