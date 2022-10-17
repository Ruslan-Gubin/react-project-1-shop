import { SingleValue } from "react-select";
import { Ioptions } from "../../App/components/CustomSelect/CustomSelect";
import { IProduct } from "../products";

interface IfilterSlice {
  menuValue: string;
  paginationPage: number;
  filterSelect: SingleValue<Ioptions>;
  dataDepartments: IProduct[];
  textSearch: string;
  textMenuFilter: IProduct[];
  page: number;
  perPage: number;
  filterPagination: IProduct[];
}

export type { IfilterSlice };
