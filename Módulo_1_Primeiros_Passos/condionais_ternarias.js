/*
    E uma forma de escrever  uma estrutura condicional simples,
    onde se tem apenas 1 condição possivel, em um única sentença.
    sintaxe:
    condição ? valor_se_verdadeiro : valor_se_falso 
*/

// Exemplo 1 
let isMenber = true;
let shipping = isMenber ? console.log("Free") : console.log("Not Free");

// Exemplo 2
let personagem = "Barbaro";
let acao = personagem == "Barbaro" ? "Chuta a porta" : "Não chuta a porta";
console.log("O que o Personagem faz? " + acao);

// Exemplo 3 
let age = 18;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult)