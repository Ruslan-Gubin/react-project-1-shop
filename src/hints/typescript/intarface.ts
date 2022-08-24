export {}

interface User {
   readonly name: string
    age?: number
    [propName: string]: any
}

const ruslan: User = {
    name: 'Ruslan',
    justTest: 'test'
    // nickName: 'RGS'  // нельзя добавить

}
ruslan.age = 30
// ruslan.name = 'Max' // доступно только для чтения


// intarface from Class
interface Use {
    name: string
    age: number
}
interface Pass {
    getPass(): string
}

class Ruslan implements Use, Pass {
    name: string = 'Ruslan'
    age: number = 31

    getPass() {
        return `${this.name}${this.age}`
    }
}

//Interface extends  наследование
interface Us {
    name: string
    age: number
}

interface Admin extends Us {  // унаследование
    getPass(): string
}

class Rus implements Admin {
    name: string = 'Ruslan'
    age: number = 31

    getPass() {
        return `${this.name}${this.age}`
    }
}







