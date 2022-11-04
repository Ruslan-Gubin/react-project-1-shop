import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models";

import { TypeRootState } from "../../store";

interface IinitState {
  auth: IUser
  status: boolean
  email: string
  password: string
}

const initialState:IinitState = {
  auth: {} as IUser,
  status: false,
  email: 'gubin_ruslan@rambler.ru',
  password: '1234qwer',
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    addAuth(state, action: PayloadAction<IUser>) {
      state.auth = action.payload
    state.auth.token &&   window.localStorage.setItem('token', state.auth.token)
      state.status = true 
    },

    update(state, action) {
      state.auth = action.payload
      state.email= action.payload.email
    },
    
    resetAuth(state) {
      state.auth = {} as IUser
      window.localStorage.removeItem('token')
      state.status = false
    },

    getAutchEmail(state, action:PayloadAction<{value: string}>) {
      state.email = action.payload.value
    },

    getAutchPassword(state, action:PayloadAction<{value: string}>) {
      state.password = action.payload.value
    },

  },
});

export const selectAuth = (state: TypeRootState) => state.auth

export const authAction = authSlice.actions;

export const authReducer = authSlice.reducer;