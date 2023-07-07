let date = new Date();

/* retorna a data dia / mes / dia mes / ano  */
console.log(date.toDateString());

/* retorna a data com fuso de Greenwich  */
console.log(date.toUTCString());

/* retorna a variável em forma de string  */
console.log(date.toString());

/* Gerando Datas cuidar que a contagem so meses começa do 0 */
let dataB = new Date(2023, 11, 12, 14,30,21);
console.log(dataB);

/* Gerando Datas com datestring */
let dataC = new Date('2023-12-12 13:30:32');
console.log(dataC);

let dataD = new Date()
let newValue1 = dataD.getFullYear(); /* traz o ano  */
let newValue2 = dataD.getMonth(); /* traz o mês  */
let newValue3 = dataD.getDate(); /* traz o dia do mês */

console.log(newValue1, newValue2, newValue3);
