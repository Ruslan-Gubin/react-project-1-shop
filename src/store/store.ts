import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getPersistConfig } from "redux-deep-persist";
import storage from "redux-persist/lib/storage";
import * as persist from "redux-persist";
import * as rtkQuery from "./rtkQuery";
import * as slice from "./slice";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  posts: slice.postSlice,
  order: slice.orderSlice,
  todos: slice.todoSlice,
  filters: slice.filterSlice,
  paginationProduct: slice.paginationProductSlice,
  paginationPost: slice.paginationPostSlice,
  [rtkQuery.postApi.reducerPath]: rtkQuery.postApi.reducer,
  [rtkQuery.productsApi.reducerPath]: rtkQuery.productsApi.reducer,
});

const config = getPersistConfig({
  key: "root",
  version: 1,
  storage,
  blacklist: [
    "posts.post",
    "filters.dataDepartments",
    rtkQuery.productsApi.reducerPath,
    rtkQuery.postApi.reducerPath,
  ],
  // whitelist: [],
  rootReducer,
});

const persistedReducer = persist.persistReducer(config, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          persist.FLUSH,
          persist.REHYDRATE,
          persist.PAUSE,
          persist.PERSIST,
          persist.PURGE,
          persist.REGISTER,
        ],
      },
    }).concat([rtkQuery.postApi.middleware, rtkQuery.productsApi.middleware]),
});

const persistor = persist.persistStore(store);
export default store;

type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();

type TypeRootState = ReturnType<typeof store.getState>;

export type { AppDispatch, TypeRootState };

export { persistor, useAppDispatch };
