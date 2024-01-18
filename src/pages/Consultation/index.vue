<script>
import ConsultationFactory from '@/factory/ConsultationFactory'
import Consultation from '@/services/Consultation/Consultation'

export default {
  name: 'Home-Page',
  async created(){
    const data = await Consultation.FindAll(false)
    const EVENTS_FORMATED = [] 
    data.forEach(value => EVENTS_FORMATED.push(ConsultationFactory.Build(value)))
    this.events = EVENTS_FORMATED
  },
  data() {
    return {
      date:new Date(),
      events:''
    }
  },
}
</script>
<template>
  <div>
    <VCalendar :attributes="events" expanded/>
    <VDatePicker v-model="date" />
  </div>
</template>