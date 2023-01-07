/** useState -хранит внутреннее состояние компонента, это состояние будет хранится между ререндерами,
 * вызов useState возврашает массив из двух элементов это текущее состояние и функция для 
 * обновления состояния, для извлечения этих  елементов используется деструктуризация этого массива
 */
const [active, setActive] = React.useState(false)
/** в useState  передается иницилизирущее значение (в данном примере false), или функцию
 * чтобы управлять состоянием используем функцию и передаем значение, также можно передать в функцию
 * колбек в которой  качестве аргумента будет текущее состояние и она будет возвращать новое состояние
 */


