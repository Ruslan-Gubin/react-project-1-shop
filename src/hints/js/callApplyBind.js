
// method -  bind , apply, call
// call вызывает фунцкию передавая контекст и аргументы
function sum(a,b,c) {
  return `${this.desc}: ${a + b + c}`
}
const sumInfo = {
  desc: 'Your result'
}
console.log(sum.call(sumInfo, 2,3,4))//Your result: 9
// apply вызывает фунцкию передавая контекст и аргументы в виде массива
console.log(sum.apply(sumInfo, [2,3,4]))//Your result: 9
// Одолжить метод
function sum2(...args) {
  console.log(Array.from(arguments))
  const result = args.reduce((acc, item) => acc + item ,0)
    // return [].reduce.call(arguments, (acc, item) => acc + item) // одалжить метод у reduce
  return `${this.desc} ${result}`
}
console.log(sum2.call(sumInfo, 1,2,3,4,5,6))
const arr = [1,2,3,45,6]
console.log(Math.max.apply(null, arr));

class Calculator {
  constructor(desc) {
    this.desc = desc
  }

  printResult(value) {
     console.log(`${this.desc}: ${value}`)
  }

  sum(a, b, c) {
    return this.printResult(a + b + c)
  }
}
/** Helpers */
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    }

    return curried.bind(this, ...args)
  }
}

const myCalculatator = new Calculator('With love your result')
myCalculatator.sum(8, 5, 2) //With love your result: 15

//bind не вызывает фунцкию но сохраняет контекст

function sum2(a,b,c) {
  return `${this.desc}: ${a + b + c}`
}
const sumInfo2 = {
  desc: 'Your result'
}

const sumNew = sum2.bind(sumInfo2 ,50) // передаем первый аргумент по умолчанию
console.log(sumNew(2,8)); //60
console.log(sumNew(2,20)); //72