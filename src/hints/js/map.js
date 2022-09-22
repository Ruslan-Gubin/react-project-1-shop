const obj = {name: 'Ruslan',age: 20,job: 'Fullstack'}
const entries = [['name', 'Ruslan'],['age', 26],['job', 'Fullstack']]
console.log(Object.entries(obj)); // преобразовывает Object в Array
console.log(Object.fromEntries(entries)); // преобразовывает Array в Object

const map = new Map(entries)
console.log(map.get('job')); // получение значение ключа
map
.set('newField', 42)  // устанавливаем ключ и значение
.set(obj, 'Value of object') // передаем обьект
.set(NaN, 'NaN ??')
.delete('job') // удаляем ключ
console.log(map.has('job')); // return false && true
map.clear(); // очищает Map
console.log(map.size); // число елементов в обьекте

for (let [key,value] of map) { // перебор Map
  console.log(key, value);
}
for ( let key of map.keys()) {
  console.log(key);
}
map.forEach((val, key, m) => console.log(val))

const array = [...map] || Array.from(map) // перевратить map in arrray
console.log(array);

const mapObj = Object.fromEntries(map.entries()) // перобразовать в Object
console.log(mapObj);

const users = [{name: 'Ruslan'},{name: 'Anna'},{name: 'Victoria'},]

const visit = new Map()
visit
.set(users[0], new Date())
.set(users[1], new Date( new Date().getTime() + 1000 * 60))
.set(users[2], new Date( new Date().getTime() + 1000 * 60))
function lastVisition(user) {
  return visit.get(user)
}
console.log(lastVisition(users[1]));