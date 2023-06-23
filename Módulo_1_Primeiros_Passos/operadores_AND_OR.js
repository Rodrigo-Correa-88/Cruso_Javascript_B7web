/*
    && (AND) retorna verdadeiro se ambas as expressões ou operandos
    forem verdadeiros se não retorna falso.

    || (OR) retorna verdadeiro se pelo menos uma expressão ou operando
    for verdadeiro se não retorna falso.
*/

let idade = 59;

if (idade >= 18) {
    if (idade < 60) {
        console.log("Você é um adulto.");
    }
};

if (idade >= 18 && idade <= 60) {
    console.log("Você é um adulto.");
};