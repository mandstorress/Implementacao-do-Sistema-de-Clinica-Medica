import { Funcionario } from "./Funcionario.js";
import { Agenda } from './Agenda.js'; 

export class Secretaria extends Funcionario{
    constructor(nome, idFuncional, salario, ramal){
        super(nome, idFuncional, salario)
        this.ramal = ramal;
        this.agendas = [];
}
    descreverFuncao(){
        return `${this.nome} atua como secretário ramal ${this.ramal}.`
    }

    criarAgendamento(data, descricao, responsavel){
        const novoAgendamento = new Agenda(data,descricao,responsavel);
        this.agendas.push(novoAgendamento);
        return novoAgendamento;
    }

}