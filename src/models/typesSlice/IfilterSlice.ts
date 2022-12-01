import { SingleValue } from "react-select";
import { Ioptions } from "App/components/CustomSelect/CustomSelect";

interface IfilterSlice {
  department: string;
  menuValue: {value: string , label: string};
  filterSelect: SingleValue<Ioptions>;
  textSearch: string;
  page: number;
  perPage: number;
}

export type { IfilterSlice };
