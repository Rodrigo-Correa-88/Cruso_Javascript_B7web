let nome = 'Cloud Strife'
console.log(nome.length); /* quantidade de caracteres na string */

console.log(nome.indexOf('Strife')); /* localiza a posição que começa algum elemento */

if (nome.indexOf('Cloud') > -1 ) {
    console.log("Possui elemento");
} else {
    console.log("Não possui elemento");
};

console.log(nome.slice(0,5)); /* recorta a string de acordo com os parâmetros */
console.log(nome.slice(-6)); /* numeros negativos contam a partir do final da string */

console.log(nome.substring(0,5)); /* semelhante ao slice porem ele não aceita
numeros negativos*/

console.log(nome.replace('Cloud' , 'Tifa'));

let jogo = "Final Fantasy 7";
console.log(jogo.toUpperCase()); /* passa para caixa alta todos 
os caracteres da string */

console.log(jogo.toLowerCase()); /* passa para caixa baixa todos 
os caracteres da string */

const texto = "   Olá,Mundo!!!!!    ";
console.log(texto.trim()); /* retira todos os espaços em branco iniciais
e finais de uma string string */

console.log(jogo.split(" ")) /* recorata a string a partir do parametro passado
e gera um array com os valores recortados */

