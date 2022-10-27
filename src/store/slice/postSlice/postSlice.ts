import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../../models";
import { IinitialStatePosts } from "../../../models/typesSlice";
import { sortArrayforDatePost } from "../../../utils";
import { TypeRootState } from "../../store";


const postSlice = createSlice({
  name: "posts",
  initialState: <IinitialStatePosts> {
    posts: [],
    tags: [],
    searchValue: "",
  },
  reducers: {

    setStatePost(state, action: PayloadAction<{ data: IPost[] }>) {
      const initialArray = action.payload.data.map((item: IPost) => item);
      const sortDateArray = sortArrayforDatePost(initialArray);
      state.posts = sortDateArray.filter((item: IPost) =>
        item.title.toLowerCase().includes(state.searchValue.toLowerCase())
      );
    },

    setsearchValuePost(state, action: PayloadAction<{ value: string }>) {
      state.searchValue = action.payload.value;
    },

   
  },

});

export const selectPosts = (state: TypeRootState) => state.posts;

export const { setStatePost, setsearchValuePost } = postSlice.actions;

export default postSlice.reducer;
