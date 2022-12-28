import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeRootState } from "store/store";
import { MineType, NeedResurceMinesType, PlayerResurceBarType } from "models/GameType";
import { ResurceBarType, ResurceSliceInitType } from "./types";
import { dateGame, maxValueInObjects } from "utils";



const initialState: ResurceSliceInitType = {
  lastMinesInfo: {} as MineType,
  nextLevelMinesUpdate: {} as NeedResurceMinesType,
  resurceBar: {} as ResurceBarType,
  mineUpdateActive: {
    status: false,
    mineId: "",
    timeUpdate: 0,
    timeStartUpdate: 0,
    timeEndUpdate: 0,
  },
  timeAvailableUpdate: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setLastMinesInfo(state, action: PayloadAction<MineType>) {
      state.lastMinesInfo = action.payload;
    },

    setNextLevelMineUpdate(state, action: PayloadAction<NeedResurceMinesType>) {
      state.nextLevelMinesUpdate = action.payload;
    },

    setResurceBar(
      state,
      action: PayloadAction<{ totalCount: number; name: string }>
    ) {
      const count = action.payload.totalCount;
      const name = action.payload.name;
      state.resurceBar[name] = count;
    },

    setResurceBarAll(state, action: PayloadAction<ResurceBarType>) {
      state.resurceBar = action.payload;
    },

    resetResurceBarAll(state) {
      state.resurceBar = {} as ResurceBarType;
    },

    setMineUpdateActive(state, action: PayloadAction<{mineId: string, timeUpdateValue: number}>) {
      state.mineUpdateActive.status = true;
      state.mineUpdateActive.mineId = action.payload.mineId;

      state.mineUpdateActive.timeStartUpdate = dateGame.nowDateMiliSeconds()
      state.mineUpdateActive.timeUpdate = action.payload.timeUpdateValue;
      state.mineUpdateActive.timeEndUpdate = state.mineUpdateActive.timeStartUpdate +  state.mineUpdateActive.timeUpdate;
         
    },

    mineCancelUpdateActive(state) {
      const resetState = {
        status: false,
        mineId: "",
        timeUpdate: 0,
        timeStartUpdate: 0,
        timeEndUpdate: 0,
      };
      state.mineUpdateActive = resetState;
    },

    setTimeAvailableUpdate (state, action: PayloadAction<{income: PlayerResurceBarType}>) {
      const incomeObj = action.payload.income
      const resourceBar = state.resurceBar
      const needResource = state.nextLevelMinesUpdate
      const time = maxValueInObjects(resourceBar, needResource, incomeObj)
      state.timeAvailableUpdate = time ? time : 0
    }

  },
});

export const selectPlayer = (state: TypeRootState) => state.player; 

export const playerAction = playerSlice.actions;

export const playerReduser = playerSlice.reducer;
