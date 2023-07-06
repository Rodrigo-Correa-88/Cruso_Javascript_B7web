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
    
/*  */

let array1 = [45,4,9,25];
let arrayA = [];

arrayA = array1.every((item) => {
    if (item > 20 ) {
        return true
    } else {
        return false
    };  
})