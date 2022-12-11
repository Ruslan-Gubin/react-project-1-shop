import { IOrderObj } from "store/slice/orderSlice/types"

const totalSum = (array: IOrderObj[]):number => {
  return array.reduce((acc, item) => acc + item.price * item.counter, 0)
}

const totalSumOldPrice = (array: IOrderObj[]):number => {
  return array.reduce((acc, item) => acc + Number(item.oldPrice) * item.counter, 0)
}

export {totalSum, totalSumOldPrice}