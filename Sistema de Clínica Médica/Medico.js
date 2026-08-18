class Medico extends Funcionario {
  constructor(nome, idFuncional, salario, crm) {
    super(nome, idFuncional, salario);
    this.crm = crm;
    this.especialidades = []; 
  }
 
  descreverFuncao() {
    return `Dr(a). ${this.nome} atua como Médico(a), CRM ${this.crm}.`;
  }
 
  adicionarEspecialidade(especialidade) {
    this.especialidades.push(especialidade);
  }
}