
let cores = ['preto', 'branco', 'azul', 'vermelho'];

for (let i = 0; i < 5; i++) {
    console.log(cores[i]); /* Percorrendo um array com for */
}

for (let i = 0; i<cores.length /* executa as repetições a quantidade do array */; i++) {
console.log(cores[i]); /* Percorrendo um array com for */
}

for (let i in cores) {
    console.log(cores[i]);
}

let valores = [1,2,3,5,67,876,455]
for (let valor of valores) {
    console.log(valor);
}

let pessoas = [
    {nome: 'Cloud', idade:27},
    {nome: 'Tifa', idade:24},
    {nome: 'Red XIII', idade:48},
]

for (let pessoa of pessoas) {
    console.log('Nome: ' + pessoa.nome + ' Idade ' + pessoa.idade);
}