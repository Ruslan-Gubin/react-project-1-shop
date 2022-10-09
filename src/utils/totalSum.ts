import { IProduct } from "../models/products"

const totalSum = (array: Array<IProduct>) => {
  return array.reduce((acc, item) => acc + item.price * item.counter, 0)
}

const totalSumOldPrice = (array: Array<IProduct>) => {
  return array.reduce((acc, item) => acc + item.oldPrice * item.counter, 0)
}

export {totalSum, totalSumOldPrice}