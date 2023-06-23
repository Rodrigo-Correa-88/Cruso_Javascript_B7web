let fruits = [
    'apple',
    'grape',
    'orange',
    'banana',
];

let bigfruits = fruits.filter((item) => {
    return item.length > 5;    
});
console.log(bigfruits);

let fruits2 = fruits.every((value) => {
    return value.length > 3
})

if (fruits2) {
    console.log("Todos são maiores que 3");
} else {
    console.log('Não são todos maior que 3');
}

if (fruits.includes('grape')){
    console.log('Have grape');
} else {
    console.log('Don\'t Have grape');
}
