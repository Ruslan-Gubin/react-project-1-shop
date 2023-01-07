/**useImperetiveHandle - нужен кастомизировать значение к которому может обратится родительский
 * компонент при помощи ref 
 * создаем в родительскоим компоненте ref и в эфекте вызываем метод focus()
 * дальше передаем ссылку дочернему компоненту, дочерний компонент оборачиваем в forwardRef
 * в дочернем компоненте также создаем ref 
 * useImperetiveHandle первым параметром принимает сылку на ref из родительского компонента
 * а вторым аргументом колбек функция где  вызываем метод focus()
 */

// import { forwardRef, useEffect, useRef,useImperativeHandle } from "react"

// const ChieldComponent = forwardRef(({},ref) => {
// const input = useRef<HTMLInputElement>(null)
// useImperativeHandle(ref,() => ({
//   focus: () => {
//     if (!input.current) {
//       return
//     }
//     input.current.focus()
//   },
// }))

//   return (
//     <div>
//       <input ref={input} type="text" />
//     </div>
//   )
// })

// const ParentComponent = () => {
//   const input = useRef<HTMLInputElement>(null)

//   useEffect(() => {
//     if (!input.current)  return 
//     input.current.focus()
//   },[])

// return (
//   <div>
//     <ChieldComponent ref={input} />
//   </div>
// )

// }