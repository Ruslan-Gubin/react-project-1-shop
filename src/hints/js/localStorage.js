const myNumber = 42

localStorage.removeItem('number')
console.log(localStorage.getItem('number'));
localStorage.setItem('number', myNumber.toString())
console.log(localStorage.getItem('number'));
localStorage.clear()

const object = {
    name: 'Max',
    age: 20
}

localStorage.setItem('person', JSON.stringify(object))

const row = localStorage.getItem('person')


const person = JSON.parse(row)
person.name = 'Ruslan'
console.log( person);

window.addEventListener('storage', event => {
    console.log(event)
})