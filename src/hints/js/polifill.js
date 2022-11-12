
// Полифил myMap

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(callback) {
    if (!(this instanceof Array || this instanceof String)) {
      throw new TypeError('Ошибка метод работает тольно на массиве или строке')
    }
    if (typeof callback !== 'function') {
      throw new Error(`Ошибка не обнаружен ${callback}`)
    }

    const result = []

    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this))
    }

    return result
  }
}

const arr = [1,2,3,4,5]

// arr.myMap((value,index,arr) => console.log(value,index,arr ))
// 1 0 [ 1, 2, 3, 4, 5 ]
// 2 1 [ 1, 2, 3, 4, 5 ]
// 3 2 [ 1, 2, 3, 4, 5 ]
// 4 3 [ 1, 2, 3, 4, 5 ]
// 5 4 [ 1, 2, 3, 4, 5 ]





// Полифил myReduce
 
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function(callback, initValue) {
    if (!(this instanceof Array || this instanceof String)) {
      throw new TypeError('Ошибка метод работает тольно на массиве или строке')
    }
    if (typeof callback !== 'function') {
      throw new TypeError(`Ошибка не обнаружен ${callback}`)
    }

    let acc = arguments.length >= 2 ? initValue : this[0]
    let iStart = arguments.length >= 2 ? 0 : 1

     for (let i = iStart; i < this.length; i++) {
      acc = callback(acc, this[i], i, this)
      
     }

    return acc
  }
}

// const test = arr.myReduce((acc,item) => acc + item)
// console.log(test); // 15


// полифил myflat

if (!Array.prototype.myFlat) {
  Array.prototype.myFlat = function(depth = 1) {
    if (!(this instanceof Array)) {
      throw new Error('Array.prototype.myFlat was called on wrong type.')
    }

    if (isNaN(depth) || depth <= 0) {
      return this
    }
    function flatten(arr, depth) {
      let result = []
      
      for (let i = 0; i < arr.length; i++) {
        const currentEl = arr[i];
        
        if (Array.isArray(currentEl) && depth > 0) {
          result.push(...flatten(currentEl, depth -1))
        } else {
          result.push(currentEl)
        }
        
      }
      return result
    }

    return flatten(this, depth)
  
  }
}

console.log([[65],[78,[28],],[23,],[1,45,5]].myFlat(2));
//[65, 78, 28, 23, 1, 45,  5]