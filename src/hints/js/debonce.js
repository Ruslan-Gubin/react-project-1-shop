//debonce это функция обвертка  предназначена для того чтобы стек функций производить с задержкой
// например применяется на инпут отправки запросов на сервер, чтобы не делать каждый раз новый запрос на сервер при нажатии клавиши

// window.addEventListener('resize', debonce(() => {  //debonce обворачиваем
// Событие resize срабатывает при изменении размера представления документа (окна)
// resize работает только на обьекте window
// }))

const f = debonce(console.log, 1000)

f(1)
f(2)

setTimeout(() => f(3),100) // недождался и перешол дальше
setTimeout(() => f(4),500) // дождался и возвался 
setTimeout(() => f(5),1600) // дождался и вызвался

function debonce(callback, delay) {
  let timer;
  return function (...args) {
    console.log(args)
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args)
    },delay)
  }
}