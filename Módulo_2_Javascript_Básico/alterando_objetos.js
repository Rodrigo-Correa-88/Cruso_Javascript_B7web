let personagem = {
    /* chave => */nome: /* valor => */'Cloud',
    idade: 26,
    pais: 'midgard',
    olhos: ['preto', 'azul'],/* array */    
    caracteristicas: { /* objeto interno */
        forca: 20,
        magia: 5,
        stamina: 15,
    },
    mensagem: function() { /* função dentro do objeto */
        console.log(`${personagem.nome} é um soldado!`);
    }
}

personagem.nome = 'Tifa'; /* alterando o nome */

 /* alterando o força com uma equação */
personagem.caracteristicas.forca =  personagem.caracteristicas.forca + 5;

/* acessando o array do objeto */
personagem.olhos.push('verde');
console.log(personagem.olhos);

let personagem2 = {
    nome: 'Cid',
    idade: 58,
    carros: [ /* criando objetos dentro do array */
        {modelo:'Fiat', cor: 'preto'},
        {modelo:'Ferrari', cor: 'vermelho'},
        {modelo:'BMW', cor: 'branco'}
    ]
}

console.log(personagem2.carros[1].modelo)/* acessando atributos dentro so array */

personagem2.carros[0].cor = 'azul'; /* modificando atributos */
console.log(personagem2.carros);