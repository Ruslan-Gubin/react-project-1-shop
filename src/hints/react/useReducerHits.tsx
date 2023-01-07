/**useReducer - этот хук можно использовать как альтернатива useState
 * useReducer  использует такие понятия как состояния стейта экшен и диспатч
 * как работает - в нем есть функция reducer которая в зависимости от action оно будет изменять состояние 
 * все способы изменить состояния будут описаны в функции редюсера
 * action это обьект, который несет в себе тип действия и данные payload
 * dispatch - это функция которая отправляет этот тип экшена 
 */

// import { useReducer } from "react"

// const  reducer = (state, action) => {
//   switch(action.type) {
//     case 'increment' : {
//       return { count: state.count + 1 }}
//     case 'decrement' : {
//       return { count: state.count - 1 }}
//     case 'reset' : { return { count: action.payload }}
//     default: { return state }
//   }
// }

// const Counter = ({initialCount = 0}) => { 
//   const [state, dispatch] = useReducer(reducer,{ count: initialCount, })
  
//   const increment = () =>  dispatch({type: 'increment'})
  
//   const decrement = () =>  dispatch({ type: 'decrement'})

//   const reset = () =>  dispatch({ type: 'reset',  payload: initialCount, })
// }