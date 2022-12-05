import { Ioptions } from "App/components/CustomSelect/CustomSelect";
import { SingleValue } from "react-select";

interface IImages {
  url: string;
  public_id: string;
}

interface IErroraddProduct {
  title: string;
  department: string;
  description: string;
  price: string;
  select: string;
  images: string;
}

interface IOptionsBodyUpdate {
  id: string;
  title: string | number;
  department: string;
  newCategory?: string;
  description: string;
  oldPrice: number | string;
  price: number | string;
  select: SingleValue<Ioptions>;
  discount: number;
  remainsImages?: (string | IImages)[];
  imageRemovesUpdate: string[];
  imageAddUpdate: string[];
  newQantity: number;
}

interface IaddProductSlice {
  id: string;
  department: string;
  title: string | number;
  description: string;
  price: number | string;
  oldPrice: number | string;
  quantity: number | string;
  select: SingleValue<Ioptions>;
  newCategory: string;
  modal: boolean;
  updatedStatus: boolean;
  images: (string | IImages)[];
  remains: number;

  optionsBodyUpdate: IOptionsBodyUpdate;

  error: IErroraddProduct;
}

export type { IaddProductSlice, IImages, IOptionsBodyUpdate, IErroraddProduct };
