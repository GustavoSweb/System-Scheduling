<script>
import ConsultationFactory from '@/factory/ConsultationFactory'
import Consultation from '@/services/Consultation/Consultation'
import _ from 'lodash'
import {format} from 'date-fns'

export default {
  name: 'Home-Page',
  async created(){
   this.consultations = await Consultation.FindAll(false)
   
    const EVENTS_FORMATED = [] 
    this.consultations.forEach(value => EVENTS_FORMATED.push(ConsultationFactory.Build(value)))
    this.events = EVENTS_FORMATED
    this.consultationSelect = this.consultations
  },
  data() {
    return {
      date:new Date(),
      events:'',
      consultationSelect:[],
      consultations:'',

    }
  },
  methods:{
    getDate: function(date){
      let data = {
        month: date.getMonth(),
        year: date.getFullYear(),
        day: date.getDate(),
      }
      return data
    }
  },
  watch:{
    date: function(){
      this.consultationSelect = this.consultations.filter((value) =>{
        let DATE_FORMATED = this.getDate(new Date(value.date))
        let DATE_SELECT_FORMATED = this.getDate(this.date)
        return _.isEqual(DATE_FORMATED, DATE_SELECT_FORMATED)
      })
    },
},
computed:{
  DateFormat: function(){
    return format(this.date, 'dd/MM/yyyy')
  }
}
}
</script>
<template>
  <article class=" flex items-center justify-center ">
    <section class="max-w-[50%] flex flex-col">
      <VDatePicker v-model="date" :attributes="events" class="my-5" expanded/>
      <h1>Voce selecionou o dia {{ DateFormat }}</h1>
      <div v-for="consultation in consultationSelect" :key="consultation._id" class="bg-white rounded-xl shadow-md my-4 w-[100%] p-4">
        <h5>{{consultation.name}}</h5>
        <p>{{consultation.description}}</p>
        <a :href="'/consultation/'+consultation._id"><button class="btn btn-primary">Detalhis da Consulta</button></a>
      </div>
    </section>
  </article>
</template>