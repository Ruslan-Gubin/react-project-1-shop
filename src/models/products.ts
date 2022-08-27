interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  _id: number;
  name: string;
  price: number;
  oldPrice: number;
  img: string;
  reting: IRating;
}

export interface IProductTest {
  id?: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
      rate: number
      count: number
  }
}

export interface IPost {
  body: any
  valueTitile:string
  valueText: string
  id: string
  _id: string
 title: string
 text: string
 date: any
 user_name: string
 user_icons: any
 img: string
}
