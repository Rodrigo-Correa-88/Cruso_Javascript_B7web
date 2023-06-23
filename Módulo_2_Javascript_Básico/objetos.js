/*
    Objetos são estruturas similares a arrays 
    que permitem organizar informações representando
    entidades do mundo real,

    Um objeto e uma coleção de propriedades com a 
    associação chave: valor, o valor pode ser 
    qualquer tipo de dado e inclusive funções.
*/

/* Criando um objeto */
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

console.log(personagem.nome); /* acessando atributos do objeto */

console.log(personagem.nome + " tem " + personagem.idade + " de idade e mora em "
 + personagem.pais); /* concatenando */

 console.log(`${personagem.nome} tem ${personagem.idade} de idade 
e mora em ${personagem.pais}`); /* utilizando string template */

console.log(personagem.nome + " tem " + personagem.caracteristicas.forca +
 " Força"); /* acessando propriedades do objeto interno */

 console.log(personagem.olhos[1]);
 /* acessamdo o array dentro do objeto */

personagem.mensagem(); /* acessando a função dentro do objeto */