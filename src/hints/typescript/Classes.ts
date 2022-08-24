export {}

class User {
  public name: string = 'Ruslan'; //значение по умолчанию
   private age: number;  //не доступен за пределами класса
   protected nickName: string;  //доступ получают только наследники
   readonly pass: number;  // только для чтения
  defaultNum: number = 20

    constructor(name:string, age: number, nickName: string, pass: number, defaultNum: number) {
        this.name = name
        this.age = age
        this.nickName = nickName
        this.pass = pass
        this.defaultNum = defaultNum
    }

    getPass():string {
        return `${this.name}${this.defaultNum}`
    }
}
const ruslan = new User('Ruslan', 31, 'grs', 123456, 30)

ruslan.name
ruslan.pass
ruslan.defaultNum
// ruslan.age //недоступен  private
// ruslan.nuckName //  недоступен  protected
ruslan.getPass() // 'Ruslan20'

// Minimization of Class properties
// обязательно указать модицикатор
class Usser {
    constructor(
        public name: string,
        public age: number,
        public nickName: string,
        public pass: number
    ){}
}

class Usseer {
    private age: number = 20
    constructor(public name:string) {}

    setAge(age: number) {  // type set age
        this.age = age
    }
   set myAge(age: number) {  // es6 classes set age  setter
        this.age = age
    }

}
const ruslan2 = new Usseer('Ruslan')

ruslan2.setAge(25)
ruslan2.myAge = 30





