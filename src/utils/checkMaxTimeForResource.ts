
  const checkTimeUpdate = (resource: number, incom: number, needResource: number): number => {
    const MS_IN_HOURS = 3600000 /** в часе миллисекунд */
    const timeDifference = needResource - resource /** сколько требуется ресурсов */
    const incomeResurce = incom /** прибыль в n/в.ч данного ресурса */
    const updatePeriod = MS_IN_HOURS / incomeResurce /** период обновления */
    const result = Math.floor((updatePeriod * timeDifference) )
    return result 
  }

const maxValueInObjects = <T,U,V>(obj1:T, obj2:U, incomObj:V): number | undefined=> {
  const result: number[] = []
      
      for (const key in obj1) {
          if ( obj1[key] < obj2[key]) {
            result.push(checkTimeUpdate(Number(obj1[key]), incomObj[key], obj2[key]))
          }
      }
      return result.length && result.sort((a, b) => b - a)[0]
}

export {maxValueInObjects, checkTimeUpdate}

