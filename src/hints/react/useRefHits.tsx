/**useRef - используется для того чтобы хранить одно и тоже значение которое будет постоянно 
 * в течении всего жизненного цикла компонента тоесть значение не будет меняться при каждом ререндере
 * useRef используется обычно для того чтобы явным образом обращатся к дочернему элементу 
 * и вызывать его функции, также в useRef можно хранить любое значение 
 * useRef возвращает обьект с полем current и изменение поля current не приводят к ререндеру компонента
 *  используется при фокусировке на инпут или скроллинг к некому елементу при иницилизации
 * 
 */
// const useRefHits = () => {
//   const [value, setValue] = useState(0)
//   const inputRef = useRef()
//   const interval = useRef()

//   useEffect(() => {
//     inputRef.current.focus()
//   },[])

//   useEffect(() => {
//     interval.current = setInterval(() => {
//       setValue((value) => value + 1)
//     },1000)

//     return () => {
//       clearInterval(interval.current)
//     }
//   },[])

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//     </div>
//   )
// }