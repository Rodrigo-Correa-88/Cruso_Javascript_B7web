/*
    Funções são blocos de construções fundamentais em javascript,
    é um conjunto de instruções que executa uma tarefa na
    aplicação.
*/

function name/*nome da função*/(params/*argumentos*/) {
    /*Declaração da Função*/
}

// Exemplo de função
function pessoa/*nome da função*/(nome, idade/*argumentos*/) {
    /* Todos os argumentos da função so ficam no escopo da função*/
    console.log("Meu nome é " + nome/*chamando primeiro argumento*/ +
        " e minha idade é " + idade/*chamando segundo argumento*/);
};

pessoa("Cloud", 27);

// Exemplo 2
function forcaPeso/*Nome função*/(massa, gravi/*Argumentos*/) {
    let peso = massa * gravi; /*Utilizando argumentos em um equação*/
    console.log("Você pesa " + peso + " Kg")
}
let graviLua = .162;
let massaPessoa1 = 71.00;

forcaPeso(massaPessoa1, graviLua); // chamando a função e adicionando argumentos



