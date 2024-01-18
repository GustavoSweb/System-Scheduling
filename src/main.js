import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

import '../public/css/index.css'

const appService = createApp(App)
appService.use(router).mount('#app')

appService.use(setupCalendar, {})

appService.component('VCalendar', Calendar)
appService.component('VDatePicker', DatePicker)


