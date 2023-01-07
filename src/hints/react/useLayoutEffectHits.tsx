/**useLayoutEffect - похож на useEffect
 *  также предназначен для сайд эфектов , первым агрументом передается колбек  функция
 * в которой можно вернуть функция (отписка от событий)
 * вторым параметром массив зависимоостей, при изменении который выполняется ефект повторно
 * useLayoutEffect - синхронная, и вызывается до useEffect
 * если в useLayoutEffect вызвать долгоиграющую задачу она заблокирует поток выполнения интерпретатора
 * пока не выполнится функция
 */

// import { useEffect, useLayoutEffect, useState } from "react";

// const longRunningTask = () => {
//   for(let i = 0; i < 100000000; i++) {
//     console.log()
//   }
// }

// const useLayoutEffectHits = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log("useEffect");
//   }, []);

//   useLayoutEffect(() => {
//     longRunningTask()
//     console.log("useLayoutEffect");
//   }, []);

//   return (
//     <div>
//       <span>{value}</span>
//     </div>
//   );
// };
/**
 * пока не выполнится useLayoutEffect мы не увидем результат работы useEffect
 * пригодится если надо чтото сделать посчитать до первого рендера например размер елемента
 * для того чтобы не происходил ефект мерцания когда у нас рендеринг не произошел задать нужный размер формы
 */