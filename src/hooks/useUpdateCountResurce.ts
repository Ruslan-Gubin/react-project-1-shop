import React from 'react';
import { useInterval } from './useInterval';


const MS_IN_HOURS = 3600000 /** в часе миллисекунд */

const useUpdateCountResurce = (updateTime: number, lastCount: number, incom: number, capasity: number) => {
  const lastUpdateTimePlayer = updateTime /**последнее обновление игрока */
  const nowDate = Date.now() /**текущее время */
  const lastCountUpdateResurce = lastCount/** последняя сумма после обновления */
  const incomeResurce = incom /** прибыль в n/в.ч данного ресурса */
  const timeDifference = nowDate - lastUpdateTimePlayer /**разница времени между обновлением */
  const updatePeriod = MS_IN_HOURS / incomeResurce /** период обновления */
  const count = Math.round(timeDifference / updatePeriod) + lastCountUpdateResurce
  const [totalCount, setTotalCount] = React.useState<number>(count)
  const [delayActive, setDelayActive] = React.useState(false)
 

  React.useEffect(() => {
    if (delayActive) {
      setTotalCount(Math.round(timeDifference / updatePeriod) + lastCountUpdateResurce)
    }
    return () => { setDelayActive(false) } 
  },[ delayActive])
  

    useInterval(() => { setDelayActive(true)}, updatePeriod)


  return (totalCount < capasity) ? totalCount : capasity
};

export  {useUpdateCountResurce};













// const MS_IN_HOURS = 3600000 /** в часе миллисекунд */

// const useUpdateCountResurce = (updateTime: number, lastCount: number, incom: number, capasity: number) => {
// //  console.log(lastCount)
//   const lastUpdateTimePlayer = updateTime /**последнее обновление игрока */
//   const nowDate = Date.now() /**текущее время */
//   const lastCountUpdateResurce = lastCount/** последняя сумма после обновления */
//   const incomeResurce = incom /** прибыль в n/в.ч данного ресурса */
//   const timeDifference = nowDate - lastUpdateTimePlayer /**разница времени между обновлением */
//   const updatePeriod = MS_IN_HOURS / incomeResurce /** период обновления */
//   let [totalCount, setTotalCount] = React.useState<number>(Math.round(timeDifference / updatePeriod) + lastCountUpdateResurce)
  
// if (totalCount < capasity) {
//   useInterval(() => { setTotalCount(totalCount + 1)}, updatePeriod)
// }
// // console.log(totalCount)
//   return (totalCount < capasity) ? totalCount : capasity
// };

// export  {useUpdateCountResurce};