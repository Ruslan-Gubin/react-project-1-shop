/**useContext - чтение значений контекста
 * контекст это данные которые видны на всем протяжении дерева компонентов, от родителя включая всех дочерних компонентов
 * контекст позволяет передавать данные по дереву без необходимости передавать пропсы на промежуточных уровнях
 * в целом контекст полезен однако он привязывает к себе компоненты и это усложняет использование повторно этих компонентов
 * 
 * 
 * 
 */
//@ts-ignore
// import { Component, createContext, useContext } from "react";

// /**создаем контекст передает дэфолтное состояние (необязательно)*/
// export const MyContext = createContext({default: false, theme: ''}) 

// /** оборачиваем родительский компонент провайдером */
// function AppContext() {
//   return (
//     <div>
//   <MyContext.Provider value={{default: false, theme: 'light'}>
//   <MyComponent />
//   <MyContext.Provider/>
//     </div>
//   )
// }

// /** достаем в дочернем компоненте  контекст*/
// const MyComponent = () => {
//   const {default, theme} = useContext(MyContext)
// }
