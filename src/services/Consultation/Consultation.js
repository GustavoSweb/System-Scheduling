import Api from "../Api";

class Consultation{
    async FindAll(showFinished = undefined){
        try{
            var result = (await Api.get('/consultation')).data
            if(showFinished != undefined)result = result.filter(a => a.finished==showFinished)
            return result
        }catch(err){
            console.log(err)
            throw new Error('Error no metodo findAll, Consultation')
        }
    }
    async FindOne(id){
        try{
            var result = (await Api.get(`/consultation/${id}`)).data
            return result
        }catch(err){
            throw new Error('Error no metodo findOne, Consultation')
        }
    }
    async Create({ name, email, description, cpf, date, time }){
        try{
            const result = Api.post('/consultation', { name, email, description, cpf, date, time })
            console.log(result)
        }catch(err){
            throw new Error('Error no metodo create, Consultation')
        }
    }
    async Finished(id){
        try{
            await Api.get(`/consultation/${id}/finished`)
        }catch(err){
            throw new Error('Error no metodo Finished, Consultation')
        }
    }
    async FindIndiceText(text){
        try{
            const result = (await Api.get(`/consultation/search/${text}`)).data
            console.log(result)
            return result
        }catch(err){
            console.log(err)
            throw new Error('Error no metodo FindIndiceText, Consultation')

        }
    }
}

export default new Consultation()