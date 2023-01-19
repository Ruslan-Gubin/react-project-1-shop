


const mapArrayToString = (arr: number[]) => {
  return arr.filter(item => Number.isInteger(item))
  .map(String)
}


export {mapArrayToString}
