/*
    O "if" é executada quando a condição for verdadeira,
    sintaxe:    
*/

let condicao = true;
//sintaxe
if (condicao) {
    console.log("Executando a declaração.");
};

/*
    Caso tivermos que executar balguma declaração se a 
    condição for falsa utilizamos o "else"
*/

condicao = false;
if (condicao) {
    console.log("Executando a declaração.");
} else {
    console.log("Executando condição falsa")
};

/*
    Se tivermos varias condições utilizamos a declaração "else if"
*/

let idade = 10;

if (idade < 18) {
    console.log("Jovem");
} else if (idade >= 18 && idade <= 50) {
    console.log("Adulto");
} else {
    console.log("Senhor")
}

// Pode também fazer a condição antes e colocar dentro de uma variável.
let personagem = true;
let jogo = "Final Fantasy 7";
//Gerando a condição dentro de uma variável
let verdade = personagem && jogo == "Final Fantasy 7"; 

if (verdade) {
    console.log("Afirmações Verdadeiras");
}


