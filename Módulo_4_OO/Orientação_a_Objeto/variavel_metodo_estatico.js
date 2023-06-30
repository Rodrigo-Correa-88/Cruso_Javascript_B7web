class Person {
    static hands = 2; /* método static faz referência a
    classe não ao objeto */

    age = 0;
    
    constructor(name) {
        this.name = name;
    }
}

const per1 = new Person("Cloud");
console.log(`${per1.name} tem ${Person.hands} mãos`);