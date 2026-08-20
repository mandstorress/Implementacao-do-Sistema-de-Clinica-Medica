 export class Agenda {
    #data
    #descricao
    #responsavel
    constructor(data, descricao, responsavel){
        this.#data = data;
        this.#descricao = descricao;
        this.#responsavel = responsavel;

    }
    getData(){
        return this.#data;
    }
    getDescricao(){
        return this.#descricao;
    }
    getResponsavel(){
        return this.#responsavel;
    }
    reagendar(novaData){
        this.#data =  novaData;
    }

 }