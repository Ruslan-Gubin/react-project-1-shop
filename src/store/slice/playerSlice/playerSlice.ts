import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeRootState } from "store/store";
import { IPlayerType, MineType, NeedResurceMinesType } from "models/GameType";
import {   ResurceBarType, ResurceSliceInitType } from "./types";



const initialState: ResurceSliceInitType = {
  player: {} as IPlayerType,
  lastMinesInfo: {} as MineType,
  nextLevelMinesUpdate: {} as NeedResurceMinesType,
  resurceBar: {} as ResurceBarType,
};

const playerSlice = createSlice({
  name: "resurce",
  initialState,
  reducers: {

    setPlayer(state, action: PayloadAction<IPlayerType>) {
      state.player = action.payload;
    },

    setLastMinesInfo(state, action: PayloadAction<MineType>) {
      state.lastMinesInfo = action.payload;
    },

    setNextLevelMineUpdate(state, action: PayloadAction<NeedResurceMinesType>) {
      state.nextLevelMinesUpdate = action.payload;
    },

    setResurceBar(state, action: PayloadAction<{totalCount: number, name: string}>) {
      const count = action.payload.totalCount
      const name = action.payload.name
      // console.log(count, name)
      state.resurceBar[name] = count
    },

    setResurceBarAll(state, action: PayloadAction<ResurceBarType>) {
      state.resurceBar = action.payload
    },

    resetResurceBarAll(state) {
      state.resurceBar = {} as ResurceBarType
    },

    
  },
});

export const selectPlayer = (state: TypeRootState) => state.resurce;

export const playerAction = playerSlice.actions;

export const playerReduser = playerSlice.reducer;
