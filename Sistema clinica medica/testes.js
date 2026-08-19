import { Agenda } from "./Agenda.js";
import { Especialidade } from "./Especialidade.js";

class Funcionario {
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

    get salario(){
        return this.#salario 
    }

    set salario(novoSalario){
        this.#salario = novoSalario 
    }

    descreverFuncao() {
        throw new Error("O método descreverFuncao() deve ser implementado pela classe filha.")
} 
}
//1-Teste de Abstração:

  try {
    new Funcionario("Ana", "TS2026", 2300);
} catch (erro) {
    console.log("Erro esperado:", erro.message);
}

  class Medico extends Funcionario {
    constructor(nome, idFuncional, salario, crm) {
      super(nome, idFuncional, salario);
      this.crm = crm;
      this.especialidades = []; 
    }
    
    descreverFuncao(){
      return `Dr(a). ${this.nome} atua como Médico(a), CRM ${this.crm}.`;
    }
   
    adicionarEspecialidade(especialidade) {
      this.especialidades.push(especialidade);
    }
  }

  //2-Teste de Herança e Encapsulamento:
const gilbertomedico = new Medico("Gilberto","md3456",13000,"23567890");
console.log(gilbertomedico);
console.log(gilbertomedico.salario);

console.log(`Salário atual: ${gilbertomedico.salario}`);
gilbertomedico.salario = 20000;
console.log(` Novo salário: ${gilbertomedico.salario}`);

//4-Teste de Agregação:
const especialidadeCirurgia = new Especialidade("Cirurgião Plástico", "v3216", "Especialista em procedimentos cirúrgicos estéticos e reparadores.");
console.log(especialidadeCirurgia.obterDetalhes());
gilbertomedico.adicionarEspecialidade(especialidadeCirurgia);
console.log(gilbertomedico);

//2-Teste de Herança e Encapsulamento:
const mariamedica = new Medico("Maria","md6321",17000,"2678290");
console.log(mariamedica);
console.log(mariamedica.salario);

console.log(`Salário atual: ${mariamedica.salario}`);
mariamedica.salario = 27000;
console.log(` Novo salário: ${mariamedica.salario}`);

//4-Teste de Agregação:
const especialidadeOdonto = new Especialidade("Dentista", "d67543", "Especialista em saúde bucal.");
console.log(especialidadeOdonto.obterDetalhes());
mariamedica.adicionarEspecialidade(especialidadeOdonto);
console.log(mariamedica);





class Secretaria extends Funcionario{
    constructor(nome, idFuncional, salario, ramal){
        super(nome, idFuncional, salario)
        this.ramal = ramal;
        this.agendas = [];
        
}
    descreverFuncao(){
        return`${this.nome} atua como secretário ramal ${this.ramal}.`
    }

    criarAgendamento(Data,descricao,responsavel){
        const novoagendamento = new Agenda(Data,descricao,responsavel);
        this.agendas.push(novoagendamento);
        return novoagendamento;
    }
    
   

}
//3-Teste de Polimorfismo
const morganSecretaria = new Secretaria("Morgan", "sec10234", 3000, "205");
const barbaraSecretaria = new Secretaria("Bárbara", "sec65434", 4000, "209");
const equipe = [barbaraSecretaria, mariamedica, gilbertomedico, morganSecretaria];
equipe.forEach(func => console.log(func.descreverFuncao()));


//5-Teste de Composição:
barbaraSecretaria.criarAgendamento("2026-08-20", "Abdominoplastia", "Dr. Gilberto");
morganSecretaria.criarAgendamento("2026-08-27", "Remoção dos sisos", "Dra. Maria");

barbaraSecretaria.agendas.forEach(ag => {
    console.log(`${ag.data} | ${ag.descricao} | Responsável: ${ag.responsavel}`);
});
morganSecretaria.agendas.forEach(ag => {
    console.log(`${ag.data} | ${ag.descricao} | Responsável: ${ag.responsavel}`);
});







