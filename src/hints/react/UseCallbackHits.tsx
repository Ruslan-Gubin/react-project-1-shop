/**useCallback - возвращает мемонизированную версию функции которая изменяется только если изменяются 
 * значение одной из зависимостей. Мемонизированная означает что ссылка на эту функцию не будет 
 * менятся во время ререндеров, это нужно чтобы избежать ненужный рендеры дочерних компонентов которые пологаются 
 * на равенство ссылок
 */

// const CountComponent  = () => {

//     const [count, setCount] = useState(0)
    
//     const handlerCount = useCallback(() => {
//         setCount(count => count + 1)
//     } ,[])
    
//     return (
//         <div >
//             <ComponentHits handlerCount={handlerCount}/>
//         </div>
//     ) 
// }

/** оборачиваем функцию в useCallback и при каждом рендере ссылка на функцию не меняется 
/** ComponentHits оборачиваем в React.memo() и теперь  ComponentHits получает 
 *  функцию с одно и тойже ссылкой и больше не происходит ререндер дочернего компонента
*/