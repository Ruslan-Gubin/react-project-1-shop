import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postApi } from "./post/postApi";
import { stationeryApi } from "./product/productsApi";
import todoReducer from "./todoSlice/todoSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import orderSlice from "./product/stationerySlice";

const rootReducer = combineReducers({
  order: orderSlice,
  todos: todoReducer,
  [postApi.reducerPath]: postApi.reducer,
  [stationeryApi.reducerPath]: stationeryApi.reducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [[stationeryApi.reducerPath], [stationeryApi.reducerPath]],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([postApi.middleware, stationeryApi.middleware]),
});

export const persistor = persistStore(store);
export default store;

export type TypeRootState = ReturnType<typeof store.getState>;
