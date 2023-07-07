let pessoa = { 
    nome: 'Cloud',
    sobrenome: 'Strife',
    social: {
        facebook: 'FF7',
        instagram: {
            url: 'CloudFF7',
            seguidores:1000,
        }
    }
};

// let { nome, sobrenome} = pessoa /* gerando variáveis com as caracteristicas do objeto */
// console.log(nome,sobrenome );

// let {nome:pessoaNome} = pessoa; /* modificando o nome da variável */
// console.log(pessoaNome);

// let {idade = 25} = pessoa; /* gerando uma valor padrão a variável */
// console.log(idade);


// let {facebook , instagram} = pessoa.social;
// console.log(facebook, instagram);

// let {nome, idade, social:{ instagram }} = pessoa
// console.log(nome, idade , instagram);

let {nome,idade , social:{instagram:{seguidores}}} = pessoa;
console.log(nome,idade,seguidores);