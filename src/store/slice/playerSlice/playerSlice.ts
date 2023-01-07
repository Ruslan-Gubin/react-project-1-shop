import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeRootState } from "store/store";
import { MineType, NeedResourceMinesType, PlayerResourceBarType } from "models/GameType";
import { ResourceBarType, ResourceSliceInitType } from "./types";
import { dateGame, maxValueInObjects } from "utils";



const initialState: ResourceSliceInitType = {
  lastMinesInfo: {} as MineType,
  nextLevelMinesUpdate: {} as NeedResourceMinesType,
  resourceBar: {} as ResourceBarType,
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

    setNextLevelMineUpdate(state, action: PayloadAction<NeedResourceMinesType>) {
      state.nextLevelMinesUpdate = action.payload;
    },

    setResourceBar(
      state,
      action: PayloadAction<{ totalCount: number; name: string }>
    ) {
      const count = action.payload.totalCount;
      const name = action.payload.name;
      state.resourceBar[name] = count;
    },

    setResourceBarAll(state, action: PayloadAction<ResourceBarType>) {
      state.resourceBar = action.payload;
    },

    resetResourceBarAll(state) {
      state.resourceBar = {} as ResourceBarType;
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

    setTimeAvailableUpdate (state, action: PayloadAction<{income: PlayerResourceBarType}>) {
      const incomeObj = action.payload.income
      const resourceBar = state.resourceBar
      const needResource = state.nextLevelMinesUpdate
      const time = maxValueInObjects(resourceBar, needResource, incomeObj)
      state.timeAvailableUpdate = time ? time : 0
    }

  },
});

export const selectPlayer = (state: TypeRootState) => state.player; 

export const playerAction = playerSlice.actions;

export const playerReduser = playerSlice.reducer;
