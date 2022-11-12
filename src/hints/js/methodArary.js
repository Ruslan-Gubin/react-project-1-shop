// методы массива
const array = new Array(1,2,3,4,5,6,7,8)
array.forEach((item, index, arr) => item * index) //только перебираем
array.map((item, ind, arr) => item * 2) // возвращает новый массив
const red = array.reduce((acc, item,index,arr) => (acc + item) )// возвращает новый массив
const findArr = array.find((item, ind,array) => ind === 4) // возвращает  найденый елемент
const findIndex = array.findIndex(item => item === 3)// вернул индекс елемента  
const filterArr = array.filter(item => item > 4)//возвращает все что подходит под условие
const someArray = array.some(item => item === 4)//возвращает  true || false
// const fillArray = array.fill(4)// наполняет новый масси аргументами [4,4,4,4,4,4,4]
array.push(20)// вставляет елемент в конец массива и мутирует его
array.unshift(15) // вставляет елемент в начало массива и мутирует его
const popArray = array.pop()// удаляет последний елемент возвращает и мутирует
const firstElem = array.shift()// удаляет первый елемент возвращает и мутирует
const concatArray = array.concat(...array, 2,6,array.filter(item => item>4) )//заполняем массив
const splitArray = 'kljafdklj'.split('')//['k', 'l', 'j','a', 'f', 'd','k', 'l', 'j']
const joinArray = splitArray.join('')  //kljafdklj превращам массив в строку 
const sortArray =  array.sort((a,b) => b - a)//[8,7,6,5,4,3,2,1] возвращает отсортированный массив
const isArrayArray = Array.isArray(array) // true || false
array.splice(0,4, 50) //  [ 50, 4, 3, 2, 1 ] митирует массив 1значение от какого индекса 
// 2 сколько елементов меняем и следущие аргументы это что мы добавляем на место указанного индекса
const sliceArray = [1,2,3,4,5].slice(0, -1)//возвращает новый массив [1, 2, 3, 4 ]
const indexOfArray = [1,2,3,4,5].indexOf(3) // возвращает индекс или -1 если не найден
const lastIndexOfArray = [1,2,3,4,5].lastIndexOf(5) //ищет елемент с конца массива
const includesArray = array.includes(4)// true || false
const revercse = [1,2,3,4,5].reverse()//[ 5, 4, 3, 2, 1 ]