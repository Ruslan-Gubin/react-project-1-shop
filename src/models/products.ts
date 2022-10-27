interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  updatedAt?:string
  discount: number
  selected: boolean
  category?: string;
  _id?: string;
  title?: string;
  price: number | string ;
  oldPrice: number | string;
  images: string[] | string;
  reting?: IRating;
  department?: string;
  counter: number;
  quantity: number | string;
  description?: string
  types?: {
    color?: string[]
    size?: number[]
  }
}



