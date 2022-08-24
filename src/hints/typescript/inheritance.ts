export {}

class User {
    private nuckName: string = 'RGS'
    static secret = 12345
    constructor(public name: string, public age: number) {}

    getPass():string {
        return `${this.name}${User.secret}`
    }
}
const ruslan = new User('Ruslan', 30)

ruslan.getPass() // Ruslan12345

class Yauhen extends User {
    name: string = 'Yauhen'
    constructor(age: number) {
        super(name, age)
    }
    gerPass(): string {
        return `${this.age}${this.name}${User.secret}`
    }
}

const max = new User('Max', 20)
const yauhen = new Yauhen(31)

yauhen.gerPass() //"31Yauhen122345"

// Abstract class example
abstract class Users {
    constructor(public name: string, public age: number) {}
    greet(): void {
        console.log(this.name)
    }
    abstract getPass(): string
}

// class Yauhens extends Users {
//     name: string = 'Ruslan'
//     constructor(age: number) {
//         super(name, age)
//     }
//     getPass(): string {
//         return `${this.age}${this.name}`
//     }
// }






