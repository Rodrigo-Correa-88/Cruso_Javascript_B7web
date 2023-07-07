console.log(Math.PI);

let x = Math.round(3.4545) /* arredondamento */
console.log(x);

let y = Math.floor(3.99) /* arredondamento para baixo */
console.log(y);

let z = Math.ceil(3.1) /* arredondamento para cima */
console.log(z);

  let g = Math.min(5,6,7,8,9,10) /* traz o menor numero */
  console.log(g);
  let h = Math.max(5,6,7,8,9,10) /* traz o maior numero */
  console.log(h);

let j = Math.random(1,10)
console.log(j);
function Random (min,max) {
    return Math.floor(Math.random() * (max - min + 1) + 1)
}
let aleatorio = Random(1 , 20)
console.log(aleatorio);
