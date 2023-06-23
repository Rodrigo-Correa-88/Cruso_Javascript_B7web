
/*
    Uma array é uma estrutura de dados que armazena 
    uma coleção de elementos em forma de lista, podendo
    ser do mesmo tipo ou não,
*/


/*
    Sintaxe básica de um array, 
    adicionar os valores entre "[]"" e separalos por ","
*/  
let cores = [ 
    'blue',
    'red',
    'green',
]

console.log(cores); /* acessando todos os elementos do array */
console.log(cores[0]); /* acessando apenas um elemento especifico do array */

/*
    Cada elemento dentro de um array é acessado por um índice numérico.
    O primeiro elemento geralmente tem um índice 0, o segundo tem índice 1
    e assim por diante.
*/

let list = [ /* Arrays com elemntos 
de tipo diferentes */
    'nome', // string
    25,     // number
    true,   // boolean
    3.5,    // float
]

console.log(typeof(list[0]));
console.log(typeof(list[1]));
console.log(typeof(list[2]));
console.log(typeof(list[3]));

/*
    Arrays dentro de arrays (multidimensional)
*/

/*exemplo 1*/
let nome = [
    'Cloud',
    'Tifa',
    'barret',
    'cid',
        idades = [
            26,
            23,
            45,
            49,
        ]
]

console.log(nome[0],idades[0]);

/*exemplo 2*/

let valores = [1, 2, 3, [4, 5, 6, [7, 8]], 9];
/* acessando elementos do array */
console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]); 

console.log(valores[3]);
console.log(valores[3][0]); 
console.log(valores[3][1]); 
console.log(valores[3][2]); 

console.log(valores[3][3]); 
console.log(valores[3][3][0]); 
console.log(valores[3][3][1]); 

console.log(valores[4]);

