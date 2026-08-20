export class Funcionario {
    nome;
    idFuncional;
    #salario;

    constructor(nome, idFuncional, salario){

        if(this.constructor === Funcionario){
            throw new Error("Classe abstrata 'Funcionario' não pode ser instanciada.")
        }

        this.nome = nome;
        this.idFuncional = idFuncional;
        this.#salario = salario;
    }

    getSalario(){
        return this.#salario 
    }

    setSalario(novoSalario){
        this.#salario = novoSalario 
    }

    descreverFuncao() {
        throw new Error("O método descreverFuncao() deve ser implementado pela classe filha.")
} 
}
