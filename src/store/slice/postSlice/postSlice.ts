import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sortCategoryName } from "../../../data";
import { IPost } from "../../../models";
import {sortArray} from "../../../utils/sortArrayforSelect";
import { TypeRootState } from "../../store";
import { IinitialStatePosts } from "./types";

const initialState: IinitialStatePosts = {
  menuValue: sortCategoryName[0],
  posts: [],
  tags: [],
  tagsSearchValue: '',
  searchValue: "",
} 


const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

    setCategoryPost(state, action: PayloadAction<{ item: string }>) {
      if (action.payload.item) {
        state.menuValue = action.payload.item;
      } 
    },

    setStatePost(state, action: PayloadAction<{ data: IPost[] }>) {
      try {
        const initialArray = action.payload.data.map((item: IPost) => item);
      let filterMenu: IPost[] = []
      if (state.menuValue === sortCategoryName[0]) {
        filterMenu = sortArray.date(initialArray);
      } else {
        filterMenu = sortArray.viewsCount(initialArray)
      }
        state.posts = filterMenu.filter((item: IPost) =>
        item.title.toLowerCase().includes(state.searchValue.toLowerCase())
        )

        if (state.tagsSearchValue) {
          state.posts = state.posts.filter((item) => {
            return  item.tags[0].includes(state.tagsSearchValue)
          })
        }
      } catch (error) {
        console.log('Не удалось найти посты', error)
      }
      
    },

    setsearchValuePost(state, action: PayloadAction<{ value: string }>) {
      state.searchValue = action.payload.value;
    },
    
    setTagsSearchValue(state, action: PayloadAction<{ value: string }>) {
      try {
        if (state.tagsSearchValue === action.payload.value) {
        state.tagsSearchValue = ''
      } else {
        state.tagsSearchValue = action.payload.value;
      }
      } catch (error) {
        console.log('Ошибка Тега',error)
      }
      
    },
   

  },

});

export const selectPosts = (state: TypeRootState) => state.posts;

export const postAction = postSlice.actions;

export const postReducer = postSlice.reducer;

