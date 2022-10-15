import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productSortingArray } from "../../../data";
import { IfilterSlice } from "../../../models";
import { IProduct } from "../../../models/products";
import { TypeRootState } from "../../store";

const filterSlice = createSlice({
  name: "filters",
  initialState:<IfilterSlice> {
    menuValue: "Все",
    paginationPage: 1,
    filterSelect: productSortingArray[0],
    dataDepartments: [],
    textSearch: "",
  },
  reducers: {
    setCategoryValue(state, action: PayloadAction<{item:string}>) {
      state.menuValue = action.payload.item;
    },

    resetMenuId(state) {
      state.menuValue = "Все";
      state.textSearch = "";
    },

    setSelectId(state, action: PayloadAction<{value: string}>) {
      state.filterSelect = action.payload.value;
    },

    setDataDepartment(state, action: PayloadAction<{id: string, data: IProduct[]}>) {
        state.dataDepartments = action.payload.data.filter(
          (item:IProduct) => item.department == action.payload.id
          );
    },

    setTextSearch(state, action: PayloadAction<{value: string}>) {
      state.textSearch = action.payload.value;
    },
  },
});

export const selectFilters = (state: TypeRootState) => state.filters

export const {
  setDataDepartment,
  setCategoryValue,
  resetMenuId,
  setSelectId,
  setTextSearch,
} = filterSlice.actions;

export default filterSlice.reducer;
