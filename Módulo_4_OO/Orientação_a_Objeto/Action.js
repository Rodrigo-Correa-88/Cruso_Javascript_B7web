class Person { 
  
    name = "";
    age = "";
    steps = "";

    constructor (name) {  
        this.name = name;
    }

    takeAStep (steps) {
        this.steps = steps;
    }

    newAge (age) {
         if (typeof age == "number"){ 
         this.age = age;} else {
            console.log('Idade somente aceita números');
         }
    }
}

let p1 = new Person("Cloud"); 
let p2 = new Person("Tifa");
let p3 = new Person("Barret");

p1.newAge(27);
p2.newAge(23);
p3.newAge(50) 

console.log(`${p1.name} tem ${p1.age} anos de idade`);
console.log(`${p2.name} tem ${p2.age} anos de idade`);
console.log(`${p3.name} tem ${p3.age} anos de idade`);

p1.takeAStep(34);

console.log(`Passos de ${p1.name}: ${p1.steps}`);
