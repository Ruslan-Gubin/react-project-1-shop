import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postApi } from "./post/postApi";


const rootReducer = combineReducers({
    
})



export const store = configureStore({
 reducer: {[postApi.reducerPath]: postApi.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postApi.middleware),   
})

export type TypeRootState = ReturnType<typeof store.getState>