import { createSlice } from "@reduxjs/toolkit";
import { productSortingArray } from "../../../data";
import { IProduct } from "../../../models/products";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    menuValue: "Все",
    paginationPage: 1,
    filterSelect: productSortingArray[0],
    dataDepartments: [],
    textSearch: "",
  },
  reducers: {
    setCategoryValue(state, action) {
      state.menuValue = action.payload.item;
    },

    resetMenuId(state) {
      state.menuValue = "Все";
      state.textSearch = "";
      console.log('object')
    },

    setSelectId(state, action) {
      state.filterSelect = action.payload.value;
    },

    setDataDepartment(state, action) {
      state.dataDepartments = action.payload.data.filter(
        (item: IProduct) => item.department == action.payload.id
      );

    },

    setTextSearch(state, action) {
      state.textSearch = action.payload;
    },
  },
});

export const {
  setDataDepartment,
  setCategoryValue,
  resetMenuId,
  setSelectId,
  setTextSearch,
} = filterSlice.actions;

export default filterSlice.reducer;
