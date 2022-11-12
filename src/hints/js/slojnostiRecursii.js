
// Оценка сложности алгоритмов

// 1 Константы  O(1)

const arr = [1,2,3,4]
function func() {}

// 2. Линейная сложность O(N)
let sum = 0
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}
 // O(N) один цикл и один зависимый параметр

// 3.  Квадратичная сложность O(N^2) 
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; i < arr.length; i++) {
  }
}
// проходим по одному и томуже массиву еще раз

// 4. Сложность O(A * B);
const arrs = [[1,2],[3,4],[5,7]]
let sums = 0
for (let i = 0; i < arrs.length; i++) {
  for (let j = 0; j < arrs[i].length; j++) {
    sums += arrs[i][j]
  }
}  
// проходимся по дному массиву в котором проходим его подмасивы

// 5. отбрасывание не доминантных функций
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}  //O(2*N) =>  O(N) константы отбрасываются
//_______________________________________________________
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
  }
} 
for (let i = 0; i < arr.length; i++) {
} 
// вложенные перебор и еще прямолинейный перебор O(N^2 + N) ->
//  O(N^2)  -- N отбрасывается
//_______________________________________________________

// 6. O(log N) -> бинарный поиск
const sortedArray = [1,2,3,4,5,6,7,8,9]
// массив делим по частям по условиям и поиск сокращается в разы

// 7. рекурсии O(2^N)
function myRecursion(n) {
  if (n <= 1) {
    return 1;
  }
  return myRecursion(n-1) + myRecursion(n-1)
}