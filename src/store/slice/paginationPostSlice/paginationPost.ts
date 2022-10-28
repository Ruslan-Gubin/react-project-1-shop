import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeRootState } from "../../store";

interface IpaginationProduct {
  page: number;
  perPage: number;
}

const paginationPostSlice = createSlice({
  name: "paginationPost",
  initialState: <IpaginationProduct>{
    page: 1,
    perPage: 12,
  },

  reducers: {
    setPrevPagePost(state) {
      state.page !== 1 ? (state.page = state.page - 1) : false;
    },

    setNextPagePost(state, action: PayloadAction<number>) {
      action.payload !== state.page ? (state.page = state.page + 1) : false;
    },

    setPaginatePost(state, action: PayloadAction<{ pageNumber: number }>) {
      state.page = action.payload.pageNumber;
    },

    resetPagePost(state) {
      state.page = 1;
    },
  },
});

export const selectPaginationPost = (state: TypeRootState) => state.paginationPost;
  
export const paginPostAction = paginationPostSlice.actions;

export const paginPostReducer = paginationPostSlice.reducer;
