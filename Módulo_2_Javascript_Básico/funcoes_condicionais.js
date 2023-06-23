/*
    Funções gerando retorno por condicionais.
*/

function parOuImpar(num) {
    let resul = num % 2;
    if (resul == 0 /*condicional*/) {
        return console.log("Par");
    } else {
        return console.log("Impar");
    }    
};
parOuImpar(234);
parOuImpar(333);

function maiorIdade(idade) {
    return idade >= 18 ? console.log("Maior de idade") :
     console.log("Menor de idade"); /*Utilizando condição ternária*/
}
maiorIdade(15)
maiorIdade(18)