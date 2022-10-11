import { sumDiscount } from "./sumDiscount";

const initSelect = (data: any) =>
  data.map((i) => ({
    ...i,
    counter: 0,
    selected: false,
    discount: sumDiscount(i.price, i.oldPrice),
  }));

export { initSelect };
