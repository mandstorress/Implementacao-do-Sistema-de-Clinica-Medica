import { Funcionario } from "./Funcionario.js";
import { Medico } from "./Medico.js";
import { Secretaria } from "./Secretaria.js";
import { Agenda } from "./Agenda.js";
import { Especialidade } from "./Especialidade.js"; 


console.log("-------------TESTE DE ABSTRAÇÃO-------------")

try {
    const funcionario = new Funcionario("Maria da Silva"," TE3947", 1.500)
} catch (erro) {
    console.log(erro.message);
}

console.log("----------TESTE DE HERANÇA E ENCAPSULAMENTO----------")
const medico = new Medico(
    "Dr. Gabriel Rossi",
    "12345678910",
    6500,
    "CRM98765"
)

const secretaria = new Secretaria("Maria da Silva", "MD9876", 4000, "09876DF")

console.log(medico)
console.log(`Salário inicial: R$ ${medico.getSalario()}`)
medico.setSalario(9500)
console.log(`Salário atualizado: R$ ${medico.getSalario()}`)

console.log("----------TESTE DE POLIMORFISMO----------")
const funcionarios = [medico, secretaria]
for (const funcionario of funcionarios){
    console.log(funcionario.descreverFuncao())
}

console.log("----------TESTE DE AGREGAÇÃO----------")
const dermatologista = new Especialidade("Dermatologista", "DER6567", "C: Especialista em pele, unhas e cabelos.")
const otorrinolaringologista = new Especialidade("Otorrinolaringologista", "OTO3439", "Especialista em ouvidos, nariz e garganta.")

medico.adicionarEspecialidade(dermatologista)
medico.adicionarEspecialidade(otorrinolaringologista)

console.log("---Detalhes das especialidades---");
medico.especialidades.forEach((e) => console.log(` -> ${e.obterDetalhes()}`));

console.log("----------TESTE DE COMPOSIÇÃO----------")
console.log("Agendamentos criados:")
secretaria.criarAgendamento(
    "19-08-2026", 
    "Consulta de rotina", 
    "Dr. Gabriel Rossi")
secretaria.criarAgendamento(
    "01-09-2026", 
    "Consulta de retorno", 
    "Dr. Gabriel Rossi")

secretaria.agendas.forEach((a) => console.log(` -> ${a.getData()}: ${a.getDescricao()}`));

secretaria.agendas[1].reagendar("10-09-2026")
console.log(`Consulta de retorno reagendada para: ${secretaria.agendas[1].getData()}`)


