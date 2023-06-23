
/*
    Quando se cria uma variável com let e var ela pode ser modificada
    a medida que o código procede, já que javascript e uma linguagem
    procedural ou seja executa linha a linha.
*/

let nome = 'Cloud';
console.log(nome)

nome = 'Tifa'
console.log(nome)

var idade = 23;
console.log(idade);
idade = 37
console.log(idade)

/*
    Para o valor sempre se manter se cria uma constante
*/

const valor = 100;
valor = 200; // vai gerar um erro !
console.log(valor);
