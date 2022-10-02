import { sortArrayforSelectDate } from "../utils";

 interface IProductSortingArray  {
  label: string;
  value: string;
}

const productSortingArray: IProductSortingArray[] = [
  {label: 'По обновлению', value:'updateDate'},
  {label: 'По цене min', value:'minPrice'},
  {label: 'По цене max', value:'maxPrice'},
  {label: 'По скидке', value:'discounts'},
]
export {productSortingArray}