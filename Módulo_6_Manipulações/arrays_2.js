let lista = [45,4,9,25];
let lista2 = [];

/* map aplica uma função definida em cada um dos elementos do array e retorna
 um array com os novos valores */
lista2 = lista.map(function (item) {
    return item*2;
})

for ( let i in lista) {
    lista[i] += 2 ;
    console.log(lista[i]);
}

/* Função de controle se os elmentos da lista retornam true ou false
para manipulação */
let listafil = lista.filter((item) => {
    for (let i in lista) {
        if ( lista[i] == 47) {
            return true
        } else {
            return false
        }
    }
    })
    
/* determina se todos os itens do array são true de acordo com a 
função específica */

let array1 = [45,4,9,25];
let arrayA = [];

arrayA = array1.every((item) => {
    return (item > 10) ? true : false
})

console.log(arrayA);

/* retorna um elemento espacífico do array */

let array2 = [45,4,9,25];
let arrayB = [];

arrayB = array2.find(function (item) {
    return (item == 45) ? true : false;
})

console.log(arrayB);

/* retorna a posição de um elemento específico do array */

let array3 = [45,4,9,25];
let arrayC = [];

arrayC = array3.findIndex(function (item) {
    return (item == 9) ? true : false;
})

console.log(arrayC);

/* retorna a posição de um elemento específico do array */

let usuarios = [
    {id:1, nome:'Cloud', sobrenome:'Strife'},
    {id:2, nome:'Tifa', sobrenome:'Lockhart'},
    {id:1, nome:'Barret', sobrenome:'Wallace'},
];

let nome = usuarios.find(function (item) {
    return (item.nome == 'Cloud' ) ? console.log("personagem no grupo") : console.log('Não esta no grupo');;
})
