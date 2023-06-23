/*
    Arrow Function possui uma sintse mais curta que a function
*/

/*Nome da função*/somar= (x,y/*Argumentos*/) => {
    return x + y; /*Expressão*/
};

console.log(somar(2,3));

/*Nome da função*/ soma = (x,y/*argumentos*/) => x + y;/* quando a 
expressão tem somente uma linha não tem necessidade de parênteses e nem return*/

/*Nome da função*/nomecompleto = (nome,sobre/*argumentos*/) => `${nome} ${sobre}`/*
expressão da função*/;

console.log(nomecompleto("Cloud", "Strife"));