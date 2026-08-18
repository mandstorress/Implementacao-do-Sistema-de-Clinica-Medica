import { Funcionario } from "./Funcionario";

export class Secretaria extends Funcionario{
    constructor(nome, idFuncional, salario, ramal){
        super(nome, idFuncional, salario)
        this.ramal = ramal;
        this.agendas = [];
}
    descreverfuncao(){return
        `${this.nome} atua como secretário ramal ${this.ramal}.`
    }

    criarAgendamento(Data,descricao,responsavel){
        const novoagendamento = new Agenda(Data,descricao,responsavel);
        this.agendas.push(NovaAgenda);
        return NovaAgenda;
    }

}