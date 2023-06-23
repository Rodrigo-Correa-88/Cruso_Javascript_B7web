/*
    Funções podem retornar valores utilizando o 
    comando "return", utilizando o "return" fica 
    mais simples trabalhar com o resultado da função 
    em outros contextos.
*/

// Exemplo 1 
function soma(num1, num2) {
    let soma = num1 + num2;
    return soma
}
console.log (soma(2,4))

//exemplo2
function nomeCompleto(nome,sobrenome) {
    return (`${nome} ${sobrenome}`);
}
let personagem = nomeCompleto("Cloud","Strife") /*Utilizando o resultado do return em uma variável*/; 
console.log(personagem + " é um personagem de jogo");

/* Exemplo de uso do resultado da função em outro contexto*/
let resul = soma(5,15);
let soma2 = resul + 10; 
console.log(soma2);