import { Ioptions } from "App/components/CustomSelect/CustomSelect";
import { SingleValue } from "react-select";

interface IImages {
  url: string
  public_id: string
}

interface IaddProductSlice {
  id: string
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
  images: string[] | IImages[]
  imageRemovesUpdate: string[];
  imageAddUpdate: string[];
  remainsImages: IImages[];

  error: {
    title: string;
    text: string;
  };
}



export type { IaddProductSlice, IImages };
