import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postApi } from "./post/postApi";
import { postsReducer } from "./post/postsReducer";
import { stationeryApi } from "./product/productsApi";


const rootReducer = combineReducers({
    posts: postsReducer,
})



export const store = configureStore({
 reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [stationeryApi.reducerPath]: stationeryApi.reducer
},
    middleware:
        (getDefaultMiddleware) => 
             getDefaultMiddleware()
             .concat([
                postApi.middleware,
                stationeryApi.middleware
            ])
            
               
    

})

export type TypeRootState = ReturnType<typeof store.getState>