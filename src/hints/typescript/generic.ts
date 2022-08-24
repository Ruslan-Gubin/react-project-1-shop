export {}

// generic   <generic>

const getter = <T>(data: T): T => data

// getter<number>(10).length // Error
getter<string>('test').length 

const list: Array<number> = [1,2,3]

// generic class 

class User<T> {
    constructor(public name: T, public age: T) {}

    public getPass(): string {
        return `${this.name}${this.age}`
    }
}
const ruslan = new User('Ruslan', "31")
const max = new User(123, 321)

ruslan.getPass() //'Ruslan31'
max.getPass(); //1233421







