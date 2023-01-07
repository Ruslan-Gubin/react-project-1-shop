
const MS_IN_HOURS = 3600000 /** в часе миллисекунд */

const  calculateResourceBarUpdate = (lastCount: number, incom: number, delay: number, capasity: number):number => {
  const nowDate = Date.now() /**текущее время */
  const lastCountUpdateResource = lastCount/** последняя сумма после обновления */
  const incomeResource = incom /** прибыль в n/в.ч данного ресурса */
  const timeDifference = nowDate + delay - nowDate /**разница времени между обновлением */
  const updatePeriod = MS_IN_HOURS / incomeResource /** период обновления */
  const count = Math.round(timeDifference / updatePeriod) + lastCountUpdateResource

return count < capasity ? count : capasity

}

export {calculateResourceBarUpdate}