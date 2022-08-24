export {}

interface User {
    name: string
}

const user: Readonly<User> = { // все свойства Толко для чтения
    name: 'Ruslan'
}
//  Required<Props> // все поля обязвтельные

// Record<K, T> //
interface PageInfo {
    title: string
}

type Page = 'home' | 'about' | 'contact'

const x: Record<Page, PageInfo> = {
    about: {title: 'about'},
    contact: {title: 'contact'},
    home: {title: 'home'}
}
// Pick<>
interface Todo {
    title: string;
    description: string;
    conpleted: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'conpleted'>

const todo: TodoPreview = {
    title: 'Clean room',
    conpleted: false
}

//omit

interface Todo2 {
    title: string;
    description: string;
    conpleted: boolean;
}

type TodoPreview2 = Omit<Todo2, 'description'>

const todo2: TodoPreview2 = {
    title: 'Clean room',
    conpleted: false
}