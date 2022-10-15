import { IProduct } from "../models/products";

 const getImgForSlider = (array:IProduct[]) => {
   return array.map((item) => item ? item.images[0] : false )
}

export {getImgForSlider}