import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "models";

import { TypeRootState } from "../../store";

interface IinitState {
  auth: IUser
  status: boolean
  email: string | number
  password: string | number
  requestFriends: string[]
  friends: string[]
  dialogs: string[]
  online: boolean
}

const initialState:IinitState = { 
  auth: {} as IUser,
  status: false,
  email: '',
  password: '',
  requestFriends: [],
  friends: [],
  dialogs: [],
  online: false,
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

    updateAuth(state, action: PayloadAction<IUser>) {
      state.auth.image = action.payload.image
      state.auth.fullName = action.payload.fullName
      state.auth.email = action.payload.email
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

    getAutchEmail(state, action:PayloadAction<{value: string | number}>) {
      state.email = action.payload.value
    },

    getAutchPassword(state, action:PayloadAction<{value: string | number}>) {
      state.password = action.payload.value
    },

    getAutchRequestFriends(state, action:PayloadAction<IUser>) {
      state.requestFriends = action.payload.requestFriends
      state.friends = action.payload.friends
    },

    getAutchOnline(state,) {
      state.online = true
    },

    getAutchOfline(state,) {
      state.online = false
    },

    

  },
});

export const selectAuth = (state: TypeRootState) => state.auth

export const authAction = authSlice.actions;

export const authReducer = authSlice.reducer;