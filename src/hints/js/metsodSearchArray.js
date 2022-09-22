const numbers = [1,2,3,4,5]
const langs = ['HTML', 'CSS', 'JavaScript','NodeJs']
const basket = [
    {id: 1,name: 'Ruslan', age: 30},
    {id: 2,name: 'Anna', age: 20},
    {id: 3,name: 'Elena', age: 15},
]

const resultIndexOf = numbers.indexOf(3)  // index && -1
console.log(resultIndexOf) //return index 2 && -1

const resultIncludes = numbers.includes(2) // false && true
console.log(resultIncludes) // true


const resultFind = basket.find(item => item.id === 3)//return object
console.log(resultFind) //{ id: 3, name: 'Elena', age: 15 }

const resultFindIndexOf = basket.findIndex(item => item.name === 'Elena')
console.log(resultFindIndexOf)  // index 2  && -1