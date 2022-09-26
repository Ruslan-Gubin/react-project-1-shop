const cleanString = (str, repeats) => {

};

console.log(cleanString("abcabcabc", 2)); // 'abcabc'
console.log(cleanString("aabbcc", 1)); // 'abc
//========================================================
const pascal = (n) => {
  const res = [[1], [1, 1]];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {}
  }

  return res;
};

console.log(pascal(5)); // [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]
//===================================================

const array = [7, "correct", 0, false, 9, NaN, ""];

const notFalse = (array) => {

};

console.log(notFalse(array)); //[ 7, 'correct', 9 ]
//===================================================
let a = 'abc'

console.log(a); // 'Dbc'
//==================================================
for (var i = 0; i < 100; i++) {
        setTimeout(() => {
            console.log(i);
        }, 0) 
}
//=================================================
console.log(1); //

const promiseA = new Promise((resolve, reject) => resolve(console.log(2))) //

a.then(res => console.log(3)) //

setTimeout(() => {
    console.log(4); //
}, 0)

console.log(5); //
//================================================= // 1,2,5,3,4
const url = 'https://jsonplaceholder.typicode.com/todos'
const xrh = new XMLHttpRequest()
xrh.open('GET', url)
xrh.send()
xrh.onload = () => console.log(JSON.parse(xrh.response));
//------
const req = fetch(url, {
    method: 'GET'
}).then(res => res.json()).then(data => console.log(data))
// сделать запрос с помощью XMLHttpRequest && fetch
//=================================================
//написать функцию promiseAll
function wait(t) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, t, true)
    })
}

function promiseAll(promises) {
  
    
  
   return new Promise((resolve, reject) => {
     for (let i = 0; i < q; i++) {
       promises[i].then(response => {
         res.push(response)

         if (q === res.length) {
            resolve(res)
         }
       })
       
     }
   })

}

promiseAll([
    Promise.resolve(20),
    wait(1000),
    wait(3000),
]).then(r => {
    console.log(r);
})
//=========================================================
//функция которая вызывает поочередно промисы
function wait(t) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, t, true)
    })
}

 function promiseWaitEach(promise) {
    
} 

promiseWaitEach([
    Promise.resolve(20),
    wait(1000),
    wait(2000),
]).then(r => {
    console.log(r);
})
//===========================================================
// Сумма элементов через замыкание

function sum(a) {
    
}

function sum(a) {
    let res = n
    return function fn(i) {
        if (typeof i === 'number') {
          res += i
          return fn
        }
        return res
      }
}
console.log(sum(1)(2)(3)()); // 6
console.log(sum(10)(10)(10)(10)());// 40
//==========================================================
// Сумма строки последовательных нечетных чисел! 
//             1
//          3     5
//       7    9     11
//    13    15    17    19
// 21    23    25    27    29
const rowSumOddNumbers = (input) => {
        let step = 2;
        let firstNumberInRow = 1;
        for (let i = 1; i < input; i++) {
            firstNumberInRow += step;
            step += 2;
        }
        let result = 0;
        for (let i = 0; i < input; i++) {
            result += firstNumberInRow;
            firstNumberInRow += 2;
        }
        return result;
}

console.log(rowSumOddNumbers(1)); //1
console.log(rowSumOddNumbers(2)); //5
console.log(rowSumOddNumbers(3)); //27
console.log(rowSumOddNumbers(4)); //64
console.log(rowSumOddNumbers(5)); //125
console.log(rowSumOddNumbers(42)); //74088
//================================================
function solution(str, ending){
  
}

console.log(solution('abcde', 'cde'))// true
console.log(solution('abcde', 'abc')) //false
///=================================================
function reverseWords(str) {
    // return str.split(' ').map(a => a.split('').reverse().join('')).join(' ')
  }
  console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
  //'ehT kciuq nworb xof spmuj revo eht yzal .god'
  console.log(reverseWords('apple')); //'elppa'
  console.log(reverseWords('a b c d')); //'a b c d'
  console.log(reverseWords('double  spaced  words')); //'elbuod  decaps  sdrow'
  //=================================================
  function disemvowel(str) {
    const map = 'aeiou'
      // return str.split('').filter(a =>  map.toLowerCase().includes(a.toLowerCase()) === false).join('')
      // return str.replace(/[aeiou]/gi, '');
    
    }
    
    console.log(disemvowel("This website is for losers LOL!"))//, "Ths wbst s fr lsrs LL!")
    console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))//, "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
    console.log(disemvowel("What are you, a communist?"))//, "Wht r y,  cmmnst?"
    //=================================================
    const removeSmallest = (numbers) =>  {
        //  return numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
        }
        console.log(removeSmallest([1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5]")
        console.log(removeSmallest([5, 3, 2, 1, 4])) // [5, 3, 2, 1, 4]")
        console.log(removeSmallest([2, 2, 1, 2, 1])) // [2, 2, 2, 1]")
        console.log(removeSmallest([]))       //[]
        //===================================================


