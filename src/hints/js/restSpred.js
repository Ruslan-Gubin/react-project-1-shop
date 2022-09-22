const citiesRussia = ['Москва', 'Санкт-петербург','Казань','Новосибирск']
const citiesEurope = ['Берлин','Прага','Париж']

const citiesRussiaWithPopulation = {
    Moskow: 20,
    SaintPeterburg: 8,
    Kazan: 5,
    Novosibirsk: 3,
}
const citiesEuripeWithPopulation = {
    Berlin: 10,
    Praha: 3,
    Paris: 2
}

console.log(...citiesRussia);
console.log(...citiesEurope);

const allcities = [...citiesRussia,'Вашингтон', ...citiesEurope]
console.log(allcities);

console.log({...citiesRussiaWithPopulation, ...citiesEuripeWithPopulation});

const numbers = [2,65,4,34,45,6]
console.log(Math.max(...numbers));

function sum (a, b, ...rest) {
    return a + b + rest.reduce((acc, i) => acc + i ,0)
}
const numbers = [1,2,3,4,5]
console.log(sum(...numbers));

const person = {
    name: 'Ruslan',
    age: 29,
    city: 'Moscow',
    country: 'Russia'
}
const {name, age, ...address} = person
console.log(name, age, address);