let info = [ 'Cloud Strife', 'Strife', 'Cloud', 'Final Fantasy 7', ];

/* A descontrução do array e feita na ordem dos indices  */

let [ nomeCompleto, sobreNome, nome, jogo] = info;
console.log(nome, sobreNome, nomeCompleto, jogo);

let info2 = ['Tifa', 'Barret', 'Red XIII', 'Vincent'];
let [per1, , ,per2] = info2;
console.log(per1, "and" , per2);


/* gerando varri */
let [personagem1 , personagem2, personagem3] = ['Tifa', 'Barret', 'Red XIII']
console.log(personagem3);
