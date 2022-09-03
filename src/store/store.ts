import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postApi } from "./post/postApi";
import { postsReducer } from "./post/postsReducer";


const rootReducer = combineReducers({
    posts: postsReducer,
})



export const store = configureStore({
 reducer: {[postApi.reducerPath]: postApi.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postApi.middleware),   
})

export type TypeRootState = ReturnType<typeof store.getState>