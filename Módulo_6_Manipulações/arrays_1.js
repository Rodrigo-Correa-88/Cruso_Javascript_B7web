let lista = [
    'Ovo',
    'farinha',
    'leite',
    'margarina',
    'chocolate'
];

console.log(lista);

console.log(typeof(lista)); /* apresente o tipo da variável */

console.log(lista.toString());/* tranforma o tipo em string */

console.log(lista.join('-')); /* acrescenta o parametro como um separador
de todos os elementos da string */

console.log(lista.indexOf('leite')); /* retorna a posição do elemento,
não encontrando ele retorna -1 */

// console.log(lista.pop()); /* remove o ultimo item do array */
// console.log(lista);
// console.log(lista.shift()); /* remove o primeiro item do array */
// console.log(lista);

console.log(lista.push('fermento'));
console.log(lista);

// delete lista[1]; deleta um item do array e deixa a posição do item vazia
// console.log(lista);

lista.splice(5,1) /* remove itens a partir dos marcadores de parâmetros
sendo o item icial o primeiro parâmetro e a quantidade de itens na sequência */

let lista2 = [
    'prato',
    'talhres',
    'guardanapos'
]
console.log(lista.concat(lista2)); /* concatena arrays */

console.log(lista.sort()); /* ordena em ordem alfabetica */
console.log(lista.reverse()); /* ordena o array com os elementos
em orden reversa */
