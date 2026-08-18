class Especialidade {
  constructor(nome, codigo, descricao) {
    this.nome = nome;
    this.codigo = codigo;
    this.descricao = descricao;
  }
 
  obterDetalhes() {
    return `${this.nome} (${this.codigo}): ${this.descricao}`;
  }
} 
