/* 1- Faça um loop que mostre todas as frutas */

let fruits = ['apple', 'grape', 'banana'];

for (let fruit of fruits) {
     console.log(fruit)
}

for (let i = 0; i < fruits.length; i++) {
    console.log(`[${i}] = ${fruits[i]}`);
    
}

/* 2- Conte de 1 até 100 atravéz de um while */

x = 0;
while (x <= 100) {
    console.log(`Contando ${x}`);
    x++;
}