/*
    Uma declaração "switch" permite que o programa avalie uma expressão 
    e tente associasr o valor da expressão ao rótulo de um "case"
*/

let classe = [
    "barbaro",
    "mago",
    "bardo",
]

switch (classe[2]) {
    case "barbaro":
        console.log("Ataca");
        break;
    case "mago":
        console.log("Fireball");
        break;
    case "bardo":
        console.log("Foge Correndo");
        break;
    default:
        console.log("Não faz nada.")
        break;
};