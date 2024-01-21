<script>
import ConsultationFactory from "@/factory/ConsultationFactory";
import Consultation from "@/services/Consultation/Consultation";
import _ from "lodash";
import { format } from "date-fns";


export default {
  name: "Home-Page",
  async created() {
    this.consultations = await Consultation.FindAll();
    this.consultations.forEach((value) => {
      if (value.finished) return;

      this.events.push(ConsultationFactory.Build(value));
    });
    this.allValue()
  },
  data() {
    return {
      date: new Date(),
      events: [],
      consultationSelect: [],
      consultations: "",
      ConsultationAll: false,
      search: "",
    };
  },
  methods: {
    allValue: function(){
      return this.consultationSelect = this.consultations;
    },
    getDate: function (date) {
      if(!date) return new Date()
      let data = {
        month: date.getMonth(),
        year: date.getFullYear(),
        day: date.getDate(),
      };
      return data;
    },
    searchConsultation: async function(){
      if(!this.search) return this.allValue()
      this.consultationSelect = await Consultation.FindIndiceText(this.search)
    }
  },
  watch: {
    date: function (newDate) {
      var DATE_SELECT_FORMATED = this.getDate(newDate);
      this.consultationSelect = this.consultations.filter((value) => {
        let DATE_FORMATED = this.getDate(new Date(value.date));
        return _.isEqual(DATE_FORMATED, DATE_SELECT_FORMATED);
      });
    },
    
  },
  computed: {
    DateFormat: function () {
      if(!this.date) return 
      return format(this.date, "dd/MM/yyyy");
    },
  },
};
</script>
<template>
  <article class="flex items-center justify-center">
    <section class="w-[50%] flex flex-col">
      <VDatePicker v-model="date" :attributes="events" class="my-5" expanded />
      <div class="flex gap-3 my-3">
        <input type="text" class="form-control" v-model="search"/>
        <button class="btn btn-primary" @click="searchConsultation">Pesquisar</button>
      </div>
      <h1 v-show="date">Voce selecionou o dia {{ DateFormat }}</h1>
      <div
        v-for="consultation in consultationSelect"
        :key="consultation._id"
        class="bg-white rounded-xl shadow-md my-4 w-[100%] p-4"
      >
        <h5>{{ consultation.name }}</h5>
        <p>{{ consultation.description }}</p>
        <a :href="'/consultation/' + consultation._id"
          ><button class="btn btn-primary">Detalhis da Consulta</button></a
        >
      </div>
    </section>
  </article>
</template>