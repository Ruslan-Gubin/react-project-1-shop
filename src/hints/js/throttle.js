// throttle function делает разреживание
// сделать пореже вызовы к примеры на обработчик событий скролла

const f = throttle(console.log, 500) //каждые пол секунды проверяет arguments

f(1)
f(2)
setTimeout(() => f(3),100) 
setTimeout(() => f(4),500)  
setTimeout(() => f(5),1600)  

function throttle(callback, delay) {
  let isWaiting = false
  let savedArgs = null
  let savedThis = null
  return function wrapper(...args) {
    if (isWaiting) {
      savedArgs = args
      savedThis = this
      return
    }
    callback.apply(this, args)

    isWaiting = true
    setTimeout(() => {
      isWaiting = false;
      if (savedThis) {
        wrapper.apply(savedThis, savedArgs)
        savedThis = null
        savedThis = null
      }
    },delay)
  }
}