// Boolean Type
 export let isCompleted: boolean = false;
// Number type
const decimal: number = 6;
// String Type
const name: string = 'Ruslan';
// Null & Undefined types
const u: undefined = undefined;
const n: null = null;
// void type
const greetYser = (): void => {
    alert('Hello, nice to see you')
}
// array type_________________________
let list: Array<number> = [1,2,3]
let x: [string, number]= ['hello', 10]
let y: [any, any] = ['hello', 42]
let z: Array<any> = [10, 'hello']

let notSure: any = false
notSure = true
notSure = 42
notSure = 'hello'

// never type____function infiniti loop
const infinitiLoop = (): never => {
    while (true) {}
}
// Object type___________
const create = (o: object | null): void => { }
// create(1)  // error
// create('42') // error
create({obj:1})

let id: number | string
id = 10
id = '423'
// id = true  -- error

// type _______________________________
type Name = string // создание пользовательского типа
let idd: Name;
idd = '42'
// idd = 10 //error
