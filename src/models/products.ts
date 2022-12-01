interface IImage {
  public_id: string
  url: string
}


interface IProduct {
  updatedAt?:string
  comments: string[]
  discount: number
  category?: string;
  _id?: string;
  title?: string;
  price: number | string ;
  oldPrice: number | string;
  images: IImage[];
  department?: string;
  quantity: number | string;
  description?: string
  viewsCount?: number
  counter: number
}

export type {IProduct}



