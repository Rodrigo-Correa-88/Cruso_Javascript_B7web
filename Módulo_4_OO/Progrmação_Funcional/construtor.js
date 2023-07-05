let person = {
    name: 'Cloud',
    lastName: 'Strife',
    getFullName () {
        return `${this.name} ${this.lastName}`;
    },
    start() {
        console.log('Deu satart na pessoa');
    }
}

person.start();
console.log(person.getFullName());