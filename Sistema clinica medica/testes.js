import { Funcionario } from "./Funcionario.js";
import { Medico } from "./Medico.js";
import { Secretaria } from "./Secretaria.js";
import { Agenda } from "./Agenda.js";
import { Especialidade } from "./Especialidade.js"; 

console.log("1-Teste de Abstração:")

  try {
    const funcionario = new Funcionario("Ana", "TS2026", 2300);
} catch (erro) {
    console.log("Erro esperado:", erro.message);
}

console.log("2-Teste de Herança e Encapsulamento:")

const gilbertomedico = new Medico("Gilberto","md3456",3000,"23567890");
console.log(gilbertomedico);
console.log(gilbertomedico.getSalario());

console.log(`Salário atual: ${gilbertomedico.getSalario()}`);
gilbertomedico.setSalario(6000)
console.log(` Novo salário: ${gilbertomedico.getSalario()}`);

console.log("3-Teste de Agregação:")

const especialidadeCirurgia = new Especialidade("Cirurgião Plástico", "v3216", "Especialista em procedimentos cirúrgicos estéticos e reparadores.");
console.log(especialidadeCirurgia.obterDetalhes());
gilbertomedico.adicionarEspecialidade(especialidadeCirurgia);
console.log(gilbertomedico);

console.log("4-Teste de Herança e Encapsulamento:")

const mariamedica = new Medico("Maria","md6321",17000,"2678290");
console.log(mariamedica);
console.log(mariamedica.getSalario());

console.log(`Salário atual: ${mariamedica.getSalario}`);
mariamedica.setSalario(2700)
console.log(` Novo salário: ${mariamedica.getSalario}`);

console.log("5-Teste de Agregação:")

const especialidadeOdonto = new Especialidade("Dentista", "d67543", "Especialista em saúde bucal.");
console.log(especialidadeOdonto.obterDetalhes());
mariamedica.adicionarEspecialidade(especialidadeOdonto);
console.log(mariamedica);

console.log("6 -Teste de Polimorfismo")
const morganSecretaria = new Secretaria("Morgan", "sec10234", 3000, "205");
const barbaraSecretaria = new Secretaria("Bárbara", "sec65434", 4000, "209");
const equipe = [barbaraSecretaria, mariamedica, gilbertomedico, morganSecretaria];
equipe.forEach(func => console.log(func.descreverFuncao()));

console.log("7-Teste de Composição:")

barbaraSecretaria.criarAgendamento("2026-08-20", "Abdominoplastia", "Dr. Gilberto");
morganSecretaria.criarAgendamento("2026-08-27", "Remoção dos sisos", "Dra. Maria");

barbaraSecretaria.agendas.forEach((a) => console.log(` -> ${a.getData()}: ${a.getDescricao()}`));
    
barbaraSecretaria.agendas[0].reagendar("2026-09-20")
console.log(`Abdominoplastia reagendada para: ${barbaraSecretaria.agendas[0].getData()}`)








