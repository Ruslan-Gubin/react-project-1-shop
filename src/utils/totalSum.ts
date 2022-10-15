import { IProduct } from "../models/products"

const totalSum = (array: Array<IProduct>):number => {
  return array.reduce((acc, item) => acc + item.price * item.counter, 0)
}

const totalSumOldPrice = (array: IProduct[]):number => {
  return array.reduce((acc, item) => acc + item.oldPrice * item.counter, 0)
}

export {totalSum, totalSumOldPrice}