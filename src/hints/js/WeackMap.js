let obj = {name: 'weackmap'}
// const arr = [obj]
// obj = null
// console.log(arr[0]);

const map = new WeakMap([
  [obj, 'obj data']
])
// get set delete has
map.has(map.get(obj))
const cash = new WeakMap()

function cashUser(user) {
  if (!cash.has(user)) {
    cash.set(user, Date.now())
  }
  return cash.get(user)
}

let lena = {name: 'Elena'}
let alex = {name: 'Alex'}

cashUser(lena)
cashUser(alex)

lena = null

console.log(cash.has(lena));
console.log(cash.has(alex));