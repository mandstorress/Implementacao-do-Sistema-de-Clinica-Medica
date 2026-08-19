 export class Agenda {
    #data
    #descricao
    #responsavel
    constructor(data, descricao, responsavel){
        this.#data = data;
        this.#descricao = descricao;
        this.#responsavel = responsavel;

    }
    get data(){
        return this.#data;
    }
    get descricao(){
        return this.#descricao;
    }
    get responsavel(){
        return this.#responsavel;
    }
    reagendar(Novadata){
        this.#data=  Novadata;
    }

 }