<template>
    <div  class="flex items-center justify-center mt-10">
        <div class="max-w-[50%] flex flex-col gap-3">
            <h2 v-show="data.finished">ESSA CONSULTA FOI FINALIZADA</h2>
            <hr v-show="data.finished">
            <h1>Nome: {{ data.name }}</h1>
            <hr>
            <div>
                <h3>Email: <span class="text-[#00000040]">{{ data.email }}</span></h3>
                <h3>Cpf: <span class="text-[#00000040]">{{ data.cpf }}</span></h3>
                <h3>Descrição: <span class="text-[#00000040]">{{ data.description}}</span></h3>
            </div>
            <hr>
            <button v-show="!data.finished" class="btn btn-danger w-1/2" @click="Finished">Marcar como Finalizada</button>
        </div>
    </div>
</template>
<script>
import Consultation from '@/services/Consultation/Consultation'
export default {
    name:'Details-Consultation',
    async created(){
        const id = this.$route.params.id
        const data = await Consultation.FindOne(id)
        if(!data && data?.length <= 0) return this.$router.push('/consultation')
        this.data = data
    },
    data(){
        return{
            data:[]
        }
    },
    methods:{
        Finished: function(){
            Consultation.Finished(this.data._id)
            this.data.finished = true
        }
    }
}
</script>