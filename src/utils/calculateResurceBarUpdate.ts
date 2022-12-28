
const MS_IN_HOURS = 3600000 /** в часе миллисекунд */

const  calculateResurceBarUpdate = (lastCount: number, incom: number, delay: number, capasity: number):number => {
  const nowDate = Date.now() /**текущее время */
  const lastCountUpdateResurce = lastCount/** последняя сумма после обновления */
  const incomeResurce = incom /** прибыль в n/в.ч данного ресурса */
  const timeDifference = nowDate + delay - nowDate /**разница времени между обновлением */
  const updatePeriod = MS_IN_HOURS / incomeResurce /** период обновления */
  const count = Math.round(timeDifference / updatePeriod) + lastCountUpdateResurce

return count < capasity ? count : capasity

}

export {calculateResurceBarUpdate}