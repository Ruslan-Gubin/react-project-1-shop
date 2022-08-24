export {}
const createPassword = (name:string, age:number) => `${name}${age}`
createPassword('Jack', 31) // 'Jack31'

const createPassword2 = (name:string, age: number | string) => `${name}${age}`

createPassword2('Ruslan', 31)
createPassword2('Ruslan', '31')

const createPassword3 = (name:string = 'Max', age: number | string = 20) => `${name}${age}`
createPassword3() // Max 20  параметры по умолчанию

const createPassword4 = (name:string, age?: number) => `${name}${age}`
createPassword4('Ruslan')//опционально аргумент можно не добавлять ?

// rest type
const createSkills = (name: string, ...skills: Array<string>) =>
`${name}, my skils are ${skills.join()}`
createSkills('Ruslan', 'JS', 'ES6', 'React')

//Returned type is string 
const createPassword5 = (name:string, age: number | string):string => `${name}${age}`

//Returned type is nymber
const sub = ( first: number, second:number): number => first + second

//Returned type is object
const createEmptyObject = (): object => ({})

// void -- если функция не возращает не каких данных
// const greetUser: void =() => {
//     alert( 'hello, nice to see you!')
// }

//never type --- возвращает ошибку 
const msg = 'hello'
const error = ( msg: string): never => {
    throw new Error(msg)
}

// never type Function infinite loop выполняется постоянно
const infiniteLoop = (): never => {
    while(true) {
    }
}

let myFunc: (firstArg: string) => void

function oldFunc(names: string):void {
    alert(`Hello ${names}, nice to see you`)
}

