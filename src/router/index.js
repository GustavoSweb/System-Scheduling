import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/index.vue'
import ConsultationRegisterPage from'../pages/Consultation/Register/index.vue'
import ConsultationPage from '../pages/Consultation/index.vue'
import ConsultationDetailsPage from '../pages/Consultation/DetailsConsultation/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/consultation/register',
    name: 'registerConsultation',
    component: ConsultationRegisterPage,
  },
  {
    path: '/consultation',
    name: 'HomeConsultation',
    component: ConsultationPage,
  },
  {
    path: '/consultation/:id',
    name: 'DetailsConsultation',
    component: ConsultationDetailsPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
