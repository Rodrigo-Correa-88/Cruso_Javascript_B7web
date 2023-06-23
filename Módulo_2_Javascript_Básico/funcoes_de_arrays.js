/*
    Funções nativas, são aquelas presentes na propria linguagem.
*/

let fruits = ['apple', 'grape', 'orange', 'banana'];

console.log(fruits);

console.log(fruits.length); /* Mostra a quantidade de elementos
do array */

fruits.push('kiwi'); /* Adiciona um item no final do array */
console.log(fruits);

console.log(fruits.join(', ')); /* Monta uma string e adiciona os elementos
indicados em join */

fruits[0] = 'pear';
console.log(fruits);



fruits.pop(fruits) /* Deleta o último item de um  array */
console.log(fruits);

fruits.shift(fruits) /* deleta o primeiro item de um array */
console.log(fruits);

