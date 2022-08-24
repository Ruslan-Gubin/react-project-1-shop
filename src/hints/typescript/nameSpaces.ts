export {}

//Namespaces -- пространство имен

namespace Utils {
   export const SECRET: string = '12345'
    const PI : number = 4.24

   export const gerPass = (name: string, age: number): string => `${name}${age}`
   export const isEnpty = <T>(data: T): boolean => !data
}

const nuPass = Utils.gerPass('Ruslan', 31) //'Ruslan31'
const isSecret = Utils.isEnpty(Utils.SECRET) // 'false'

const PI = 3  //No Errors

/// устарел ------------------------------------------

//Import / Export

// export const SECRET: string = '12345'
// export const getPass = (name:string, age: number): string => `${name}${age}`

// import { getPass, SECRET} from './nameSpaces'

// const myPass = getPass(SECRET,31)












