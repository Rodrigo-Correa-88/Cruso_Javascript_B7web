
function createPerson (name, lastName, age) {
    return {
        name,
        lastName,
        age,
    }
}

let per1 = createPerson("Cloud","Strife", 26);
let per2 = createPerson("Tifa","Lockhart",23)

console.log(per1.name,per1.lastName);
