/* 1. No array abaixo , qual o número que pega a Ferrari */
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1;
console.log('1 . ' + carros[x]);

/* 2. Troque a Ferrari por Audi */
carros[1] = 'Audi';
console.log(carros);

/* 3. Adicione Volvo a lista */
carros.push('Volvo');
console.log(carros);

/* 4. Exiba quantos itens tem no array */
console.log("O array possui " + carros.length + " itens");