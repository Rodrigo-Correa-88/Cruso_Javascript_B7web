let pessoa = {
    nome: 'Cloud',
    sobrenome: 'Strife',
    idade: 26,
    nomeCompleto: function () {
        /* comando this acessa diretamente os atributos do objeto
        pq ele se refere ao proprio objeto */
        return this.nome + ' ' + this.sobrenome 
    } 
}

console.log(pessoa.nomeCompleto());