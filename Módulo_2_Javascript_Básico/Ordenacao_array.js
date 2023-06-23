let fruits = [
    'apple',
    'grape',
    'orange',
    'banana',
]

fruits.sort() /* Ordena em ordem alfabética */
console.log(fruits);
fruits.reverse() /* inverte a ordenção alfabética */
console.log(fruits);

let cars = [
    {brand:'Fiat', year: 2022},
    {brand:'Bmw', year: 2018},
    {brand:'Fiat', year: 2022},
]
 cars.sort((a,b) => {
    return a.year = b.year
 })

 console.log(cars);