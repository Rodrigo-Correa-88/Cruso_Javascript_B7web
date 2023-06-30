class Person {
    age=0;
    constructor(name) {
        this.name = name;
    }
}
/* Factory e um conceito de criar um função para criar objetos */
function createPerson (name, age) {
    let p = new Person(name);
    p.age = age;
    return p;
}
let per = createPerson("Cloud", 23)
console.log(per.name);