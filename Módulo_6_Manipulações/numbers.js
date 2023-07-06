let a = 10;
let b = 12;
let c = 22.936917652876;

console.log(a.toString()); /* tranforsma a variável em um tipo string
funciona para outros tipos tambem */

console.log(c.toFixed(2)); /* controla os numeros decimais de acordo
com o parametro passado */

let string = "35";
let soma = parseInt(string) + a; /* trasforma um variavel string
em um number inteiro */
console.log(soma);

let stringFLoat = "35.23";
let somaFloat = parseFloat(stringFLoat) + 5.45; /* trasforma um variavel string
em um number com ponto flutuante */
console.log(somaFloat);



