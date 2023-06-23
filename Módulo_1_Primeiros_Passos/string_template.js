//string
let nome = "Cloud";
let sobrenome = "Strife";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

// No template strings se usa os acentos crases ``
let Completo = `${nome} ${sobrenome} é um personagem.`
// para indicar uma variável no template se utiliza o comando ${} chamado de expressão  
console.log(Completo); 

// outro exemplo de template string
let idade = 34;
let idadeString = `${idade} anos`
console.log(idadeString);