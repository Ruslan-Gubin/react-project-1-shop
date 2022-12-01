import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingleValue } from "react-select";
import { productSortingArray } from "data";
import { IfilterSlice } from "models";
import { TypeRootState } from "store/store";
import { Ioptions } from "App/components/CustomSelect/CustomSelect";


const filterSlice = createSlice({
  name: "filters",
  initialState: <IfilterSlice> {
    department: '',
    menuValue: {label: 'Все', value: 'Все'},
    filterSelect: productSortingArray[0],
    textSearch: "",
    page: 1,
    perPage: 12,
  },
  reducers: {
    
    setCategoryValue(state, action: PayloadAction<{ label: string, value: string }>) {
      state.menuValue = action.payload;
      state.page = 1;
    },

    resetMenuId(state) {
      state.menuValue = {label: 'Все', value: 'Все'};
      state.textSearch = "";
      state.page = 1;
    },

    setTextSearch(state, action: PayloadAction<{ value: string | number}>) {
      state.textSearch = String(action.payload.value);
      state.page = 1;
    },

    setSelectId(  state,  action: PayloadAction<{ value: SingleValue<Ioptions> }> ) {
      state.filterSelect = action.payload.value;
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

    setDepartment(state, action: PayloadAction<{ value: string }>) {
      state.department = action.payload.value;
      filterSlice.caseReducers.resetMenuId(state)
    },

    
  },
});

export const selectFilters = (state: TypeRootState) => state.filters; 

export const filterAction = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
