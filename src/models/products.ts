interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  discount: number
  selected: boolean
  category?: string;
  _id?: string;
  title?: string;
  price: number | string;
  oldPrice: number | string;
  images: string[] | string;
  reting?: IRating;
  department?: string;
  counter: number;
  quantity: number | string;
  description?: string
  // id?: string
  types?: {
    color?: string[]
    size?: number[]
  }
}

export interface IProductTest {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IPost {
  body: any;
  valueTitile: string;
  valueText: string;
  id: string;
  _id: string;
  title: string;
  text: string;
  date: any;
  user_name: string;
  user_icons: any;
  img: string;
}
