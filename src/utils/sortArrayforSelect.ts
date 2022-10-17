import { SingleValue } from "react-select";
import { Ioptions } from "../App/components/CustomSelect/CustomSelect";
import { IProductSortingArray } from "../data/productSortingArray";
import { IPost, IProduct } from "../models/products";

const sortArrayforSelect = (array: IProduct[]) => {
  return array.sort(
    (a, b) => parseFloat(String(a.price)) - parseFloat(String(b.price))
  );
};

const sortArrayforSelectDate = (array: IProduct[]) => {
  return array.sort(
    (a, b) =>
      new Date(String(a.updatedAt)).getTime() - new Date(String(b.updatedAt)).getTime() 
  );
};

const sortArrayforDatePost = (array: IPost[]) => {
  return array.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

const sortArrayforSelectDiscount = (array: IProduct[]) => {
  return array.sort(
    (a, b) => parseFloat(String(a.discount)) - parseFloat(String(b.discount))
  );
};

const selectOptionsSort = (
  select: SingleValue<Ioptions>,
  array: IProductSortingArray[],
  data: IProduct[]
) => {
  if (select === array[0]) {
    sortArrayforSelectDate(data);
  } else if (select === array[1]) {
    sortArrayforSelect(data);
  } else if (select === array[2]) {
    sortArrayforSelect(data).reverse();
  } else if (select === array[3]) {
    sortArrayforSelectDiscount(data);
  }
};

export {
  sortArrayforDatePost,
  sortArrayforSelect,
  sortArrayforSelectDate,
  sortArrayforSelectDiscount,
  selectOptionsSort,
};
