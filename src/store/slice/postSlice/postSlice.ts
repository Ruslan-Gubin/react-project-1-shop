import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../../models/products";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    post: [],
    searchValue: "",
  },
  reducers: {
    setStatePost(state, action) {
      const initialArray = action.payload.data.map((item: IPost) => item);
      state.post = initialArray.filter((item: IPost) =>
        item.title.toLowerCase().includes(state.searchValue.toLowerCase())
      );
    },

    setsearchValuePost(state, action) {
      state.searchValue = action.payload.value;
    },
  },
});

export const { setStatePost, setsearchValuePost } = postSlice.actions;

export default postSlice.reducer;
