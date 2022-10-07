import { IProduct } from "../models/products";

const categoryFilterName = (data: Array<IProduct>, translate:boolean = false) => { 
  const searcCaregory = data.map((item) => item.category);
  
  translate ? searcCaregory.unshift('Все') : searcCaregory.unshift('all')

  return (Array.from(new Set(searcCaregory))).filter(item => item !== '') 
};

const selectAddProduct = (array: Array<IProduct>) => {
  const arraySetcategory = Array.from(new Set(array.map(item => item.category)))
  const res = arraySetcategory.map(item => ({label:  item, value: item}))
  return res
}

export { categoryFilterName, selectAddProduct};