/*
Escopos é o contexto atual de execução de 
uma variável(visibilidade), podem ser globais
onde toda a aplicação tem acesso, locais
ou de bloco que é quando e deficinida dentro de uma
função, loop ou condicional, escopo de função,
quando é definida dentro de uma função ou de classe
quando e definida dentro de uma classe 
*/


// Exemplo 1 ______________________________________________

function add() {
    let count = 0;
    count++;
    /*Variáveis dentro de funções so podem ser usadas nas mesmas
    pois estão somente no escopo da função*/
}
// add()
// add()
// console.log(count);

// Exemplo 2 _____________________________________________

let count = 0 /* Escopo definido de maneira global 
toda a aplicação tem acesso*/
function add2() {
    count++
}
add2()
add2()
console.log(count);