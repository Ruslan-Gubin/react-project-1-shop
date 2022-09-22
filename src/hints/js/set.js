const set = new Set([1, 2, 1, 1, 44, 2, 2, 44, 55, 4, 44, 55, 1]);
set.add(10).add(20).add(30); // добавляем елемент
console.log(set.has(20)); // true || false
console.log(set.size); // длина обьекта
set.delete(20); // удаляет значение
// set.clear() // очищает данные

console.log(set.values());
console.log(set.keys());
console.log(set);

for (let key of set) {
  console.log(key);
}

function uniqValues(array) {
  return Array.from(new Set(array)).sort();
}

console.log(uniqValues([1, 1, 2, 2, 2, 4, 4, 4, 4, 6, 7, 8, 9, 9, 9, 9, 5, 4]));
