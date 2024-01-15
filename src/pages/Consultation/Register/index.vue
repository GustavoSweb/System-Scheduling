<template>
    <article class="w-full flex justify-center items-center flex-col">
        <h1 class="mb-5">Cadastro de Consultas</h1>
        <form action="" class="w-[60%] flex gap-4 flex-col">
            
            <input type="text" name="namepatient" class="form-control" placeholder="Nome do paciente...">
            <input type="email" name="namepatient" class="form-control" placeholder="Email do paciente...">
            <input type="text" name="cpf" class="form-control" v-mask="'###.###.###-##'" placeholder="Cpf do paciente">
            <textarea name="description" cols="30" rows="10" class="form-control" placeholder="Descrição da consulta..."></textarea>
            <div class="flex gap-3">
                <input type="date" name="date" class="form-control">
                <input type="time" name="time" class="form-control">
            </div>
            <div class="flex justify-end"><button class="btn btn-primary w-[30%]">Agendar</button></div>
        </form>
    </article>
</template>
<script>
import { mask } from 'vue-the-mask'

export default {
    name: 'Register-Page',
    directives:{mask}
}
</script>
