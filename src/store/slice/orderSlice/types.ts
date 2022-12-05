import { IProductImag } from "models/products"

interface IOrderImag extends IProductImag {}

interface IOrderObj {
  _id: string
  title: string
  comments: string[],
  description: string
  department: string
  category: string
  images: IOrderImag
  price: number
  oldPrice:number 
  quantity: number
  discount: number
  viewsCount:number
  createdAt: string
  updatedAt: string
  __v: number
  counter: number
}

export type {IOrderObj}
