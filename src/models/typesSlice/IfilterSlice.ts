import { IProductSortingArray } from "../../data/productSortingArray"
import { IProduct } from "../products"

interface IfilterSlice {
  menuValue: string
  paginationPage: number
  filterSelect: string | IProductSortingArray
  dataDepartments: IProduct[]
  textSearch: string
}

export type {IfilterSlice,}