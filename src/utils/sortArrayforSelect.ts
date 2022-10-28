import { SingleValue } from "react-select";
import { Ioptions } from "../App/components/CustomSelect/CustomSelect";
import { IProductSortingArray } from "../data/productSortingArray";
import { IPost } from "../models/iPost";
import { IProduct } from "../models/products";

class SortArray {
  price(array: IProduct[]) {
    return array.sort(
      (a, b) => parseFloat(String(a.price)) - parseFloat(String(b.price))
    );
  }

  date(array: IProduct[] | IPost[]) {
    return array.sort(
      (a, b) =>
        new Date(String(b.updatedAt)).getTime() -
        new Date(String(a.updatedAt)).getTime()
    );
  }

  discount(array: IProduct[]) {
    return array.sort(
      (a, b) => parseFloat(String(a.discount)) - parseFloat(String(b.discount))
    );
  }

  viewsCount(array: IPost[]) {
    return array.sort(
      (a, b) =>
        parseFloat(String(b.viewsCount)) - parseFloat(String(a.viewsCount))
    );
  }
}

const sortArray = new SortArray();

const selectOptionsSort = (
  select: SingleValue<Ioptions>,
  array: IProductSortingArray[],
  data: IProduct[]
) => {
  if (select === array[0]) {
    sortArray.date(data);
  } else if (select === array[1]) {
    sortArray.price(data);
  } else if (select === array[2]) {
    sortArray.price(data).reverse();
  } else if (select === array[3]) {
    sortArray.discount(data);
  }
};

export { sortArray, selectOptionsSort };
