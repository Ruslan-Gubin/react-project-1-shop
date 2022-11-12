
// Рекурсия это прием програмирования в которой задача разбивается на подзадачи
function factorial(n) {
  if (n < 0 ) {
  console.log('Неверно указан параметр')  
  return
  } else if (n === 0) {
      return 1;
    } 
      return n * factorial(n-1)
    //n 4*3=12, n 4*2=8, n 4*1=4, total= 24 
}
console.log(factorial(4))// 1 * 2 * 3 * 4 = 24
// последовательность фибоначи
function fibonacci(n) {
 if (n <= 1) {
  return n;
 } else {
  return fibonacci(n - 1) + fibonacci(n - 2)
 }
}
console.log(fibonacci(6)) // 8

function flatten(...data) { 
  const result = []
  for (let i = 0; i < data.length; i++) {
    const currentEl = data[i]
   if (Array.isArray(currentEl)) {
      result.push(...flatten(...currentEl)) 
    } else {
      result.push(currentEl)
    }
  }
  return result
}
function flattenReduce(...data) {
  return data.reduce((acc,item) => (
    Array.isArray(item) ? acc.concat(flattenReduce(...item))
   : acc.concat(item)
  ), []);
}
console.log(flattenReduce([1,[2,[[3]],4,5,[6,[7]]]]))
console.log(flatten(['a', ['b',2], 3, null, [[4], ['c']]]))