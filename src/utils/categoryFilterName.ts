import { IProduct } from "../models/products";

const categoryFilterName:Function = (data: IProduct[], translate:boolean = false) => { 
  const searcCaregory:string[] = data.map((item) => item.category);
  
  translate ? searcCaregory.unshift('Все') : searcCaregory.unshift('all')

  return (Array.from(new Set(searcCaregory))).filter(item => item !== '') 
};

interface Ires{
  label:string
  value:string
}

const selectAddProduct:Function = (array:IProduct[]) => {
  const arraySetcategory:string[] = Array.from(new Set(array.map(item => item.category)))
  const res:Ires[] = arraySetcategory.map(item => ({label:  item, value: item}))
  return res
}

export { categoryFilterName, selectAddProduct};