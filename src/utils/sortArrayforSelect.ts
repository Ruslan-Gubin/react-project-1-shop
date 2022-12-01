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



export { sortArray };
