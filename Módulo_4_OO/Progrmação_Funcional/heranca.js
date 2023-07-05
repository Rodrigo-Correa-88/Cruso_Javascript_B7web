const defautUser = {
    name: '',
    email: '',
    level: 1,

}

const user1 = {
    ...defautUser, /* clona os atributos da constante */
    name: 'Cloud',
    email: 'finalfantasyVII@square.com'
}

const admin1 = {
    ...defautUser,
    name: 'Admin Barret',
    email: 'adm@admboladao.com.br',
}

console.log(user1);
console.log(admin1);