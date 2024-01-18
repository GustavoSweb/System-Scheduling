<template>
  <article class="w-full flex justify-center items-center flex-col">
    <h1 class="mb-5">Cadastro de Consultas</h1>
    <div class="w-[60%] flex gap-4 flex-col">
      <input
        type="text"
        name="namepatient"
        class="form-control"
        placeholder="Nome do paciente..."
        v-model="name"
      />
      <input
        type="email"
        name="namepatient"
        class="form-control"
        placeholder="Email do paciente..."
        v-model="email"
      />
      <input
        type="text"
        name="cpf"
        class="form-control"
        v-mask="'###.###.###-##'"
        placeholder="Cpf do paciente"
        v-model="cpf"
      />
      <textarea
        name="description"
        cols="30"
        rows="10"
        class="form-control"
        placeholder="Descrição da consulta..."
        v-model="description"
      ></textarea>
      <div class="flex gap-3">
        <input type="date" name="date" class="form-control" v-model="date" />
        <input type="time" name="time" class="form-control" v-model="time" />
      </div>
      <div class="flex justify-end">
        <button class="btn btn-primary w-[30%]" @click="CreateConsultation">
          Agendar
        </button>
      </div>
    </div>
  </article>
</template>
<script>
import Consultation from "@/services/Consultation/Consultation";
import { mask } from "vue-the-mask";

export default {
  name: "Register-Page",
  directives: { mask },
  data() {
    return {
      name: "",
      email: "",
      description: "",
      date: "",
      time: "",
      cpf: "",
    };
  },
  methods: {
    clearForm: function () {
      this.name = "";
      this.email = "";
      this.description = "";
      this.date = "";
      this.time = "";
      this.cpf = "";
    },
    CreateConsultation: async function () {
      try {
        await Consultation.Create({
          name: this.name,
          email: this.email,
          description: this.description,
          date: this.date,
          time: this.time,
          cpf: this.cpf,
        });
        this.clearForm()
      } catch (err) {
        console.log(err);
        this.$router.push("/consultation")
      }
    },
  },
};
</script>
