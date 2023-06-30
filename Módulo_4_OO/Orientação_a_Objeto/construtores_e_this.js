class Person { /* geralmente a primeira letra da classe e maiscula */
    constructor (name,age) {  /* função executada sempre que se criar um objeto */
        this.name = name;
        this.age = age;
    }
}

let p1 = new Person("Cloud",26); /* Criando objetos com a função construtor */
let p2 = new Person("Tifa",23);
let p3 = new Person("Barret",40);

console.log(p1.name); /* Acessando valores de objetos */

p1.name = "Cid"; /* Modificando valores de objetos */
p1.age = 50;
console.log(`${p1.name} tem ${p1.age} anos de idade`);
console.log(`${p2.name} tem ${p2.age} anos de idade`);
console.log(`${p3.name} tem ${p3.age} anos de idade`);