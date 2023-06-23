/* construindo o array */
let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'leite',
    'açucar'
]
/* apresentando o array e a quantidade de itens que ele possui */
console.log(`Total de ingredientes: ${ingredientes.length}`);
ingredientes[5] = "chocolate"; // sintaxe para incluir um elemento no array

console.log(`Total de ingredientes: ${ingredientes.length}`);
ingredientes[7] = "granulado";

console.log(`Total de ingredientes: ${ingredientes.length}`);
console.log(ingredientes); // visualizando o array

ingredientes.push('manteiga');
console.log(ingredientes);

/* comando para ver todos os elementos do
array com os índices  */
for (let i = 0; i < ingredientes.length; i++) {
    console.log(`ìndice [${i}] =` , ingredientes[i]);    
}
