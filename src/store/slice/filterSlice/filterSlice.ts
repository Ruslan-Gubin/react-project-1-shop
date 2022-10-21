import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleValue } from "react-select";
import { Ioptions } from "../../../App/components/CustomSelect/CustomSelect";
import { productSortingArray } from "../../../data";
import { IfilterSlice } from "../../../models";
import { IProduct } from "../../../models/products";
import { selectOptionsSort } from "../../../utils";
import { TypeRootState } from "../../store";

const filterSlice = createSlice({
  name: "filters",
  initialState: <IfilterSlice>{
    menuValue: "Все",
    paginationPage: 1,
    filterSelect: productSortingArray[0],
    dataDepartments: [],
    textSearch: "",
    textMenuFilter: [],
    page: 1,
    perPage: 12,
    filterPagination: [],
  },
  reducers: {
    setCategoryValue(state, action: PayloadAction<{ item: string }>) {
      state.menuValue = action.payload.item;
      state.page = 1;
    },

    resetMenuId(state) {
      state.menuValue = "Все";
      state.textSearch = "";
      state.page = 1;
    },

    setDataDepartment(
      state,
      action: PayloadAction<{ id: string; data: IProduct[] }>
    ) {
      state.dataDepartments = action.payload.data.filter(
        (item: IProduct) => item.department == action.payload.id
      );
    },

    setTextSearch(state, action: PayloadAction<{ value: string }>) {
      state.textSearch = action.payload.value;
      state.page = 1;
    },

    setSelectId(
      state,
      action: PayloadAction<{ value: SingleValue<Ioptions> }>
    ) {
      state.filterSelect = action.payload.value;

      selectOptionsSort(
        state.filterSelect,
        productSortingArray,
        state.dataDepartments
      );
    },

    setSearchTextForMenu(state) {
      let res: IProduct[] = state.dataDepartments.filter((item) =>
        item.title?.toLowerCase().includes(state.textSearch.toLowerCase())
      );
      state.textMenuFilter = res;
      if (state.menuValue === "Все") {
        state.textMenuFilter = res;
      } else if (state.menuValue !== "Все") {
        state.textMenuFilter = res.filter(
          (item) => item.category === state.menuValue
        );
      }
    },

    setPrevPageProduct(state) {
      state.page !== 1 ? (state.page = state.page - 1) : false;
    },

    setNextPageProduct(state, action: PayloadAction<number>) {
      action.payload !== state.page ? (state.page = state.page + 1) : false;
    },

    setPaginateProduct(state, action: PayloadAction<{ pageNumber: number }>) {
      state.page = action.payload.pageNumber;
    },

    setFilterPagination(state) {
      const lastPostsIndex = state.page * state.perPage;
      const firstPostsIndex = lastPostsIndex - state.perPage;
      let currentPosts = state.textMenuFilter.slice(
        firstPostsIndex,
        lastPostsIndex
      );
      state.filterPagination = currentPosts;
    },
  },
});

export const selectFilters = (state: TypeRootState) => state.filters;

export const {
  setFilterPagination,
  setPrevPageProduct,
  setNextPageProduct,
  setPaginateProduct,
  setSearchTextForMenu,
  setDataDepartment,
  setCategoryValue,
  resetMenuId,
  setSelectId,
  setTextSearch,
} = filterSlice.actions;

export default filterSlice.reducer;
