class Person {
    age = 0;
    constructor(name) {
        this.name = name;
    }
    sayHi () {
        console.log(`${this.name} diz OI`);
   }
}

class Student extends Person {
    
    constructor (name,id) {
        super(name) /* super executa a função da classe pai */
        this.id = id
    }

    sayHi () { /* Lembrar que o método do objeto sempre tem 
    prioridade sobre o método herdado */
         super.sayHi()
    }
}

let p1  = new Student("cloud",1)
const per1 = new Student("Tifa",2);
per1.age = 23
console.log(`${per1.name} tem ${per1.age} anos e matrícula #${per1.id}`);
per1.sayHi();