
let Person = {
    name: 'Cloud',
    lastName: 'Strife',
    age: 25,
    getFullName() {
        return `${this.name} ${this.lastName}`
    }
}

console.log(Person.getFullName());