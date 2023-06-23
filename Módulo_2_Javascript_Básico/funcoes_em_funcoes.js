/*
    Criada a função square.
*/
function square (x) {
    return x*x; /*Função com escopo global*/
}

function addsquares (a,b) {
    return square(a) + square(b);/*Função square utilizada dentro do escopo 
    da função addsquares*/
}

function add2squares (a,b) {
   
    function square (x) {
        return x*x; /*Função com escopo local dentro de 
        outra função*/
    }
    
    let sqra = square(a);
    let sqrb = square(b);
    return sqra + sqrb;
}

console.log(square(5));
console.log(square(7));
console.log(add2squares(5, 7));