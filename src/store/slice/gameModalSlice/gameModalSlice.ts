import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeRootState } from "store/store";
import { modalActiveAccordion } from "utils";

const initialState = {
  modalStatus: false,
  playerOptionsModal: [
    { id: 1, value: "Инвентарь", status: false },
    { id: 2, value: "Параметры", status: false },
    { id: 3, value: "Аукцион", status: false },
    { id: 4, value: "Приключение", status: false },
  ],
};

const gameModalSlice = createSlice({
  name: "gameModal",
  initialState,
  reducers: {

    setModalActive(state, action: PayloadAction<{ value: string }>) {
      let check: boolean = false
   
   state.playerOptionsModal.forEach(item => {
     if (item.value === action.payload.value) {
      item.status ? check = true : false
    }
   })
   
   if (state.modalStatus && check) {
     gameModalSlice.caseReducers.setModalClose(state)
    } else {
      state.modalStatus = true;
      state.playerOptionsModal = modalActiveAccordion(
        state.playerOptionsModal,
        action.payload.value
        )
      }
    },

    setModalClose(state) {
      state.modalStatus = false;
      state.playerOptionsModal = state.playerOptionsModal.map(item => {
        item.status = false
      return item
      })
    },

    linkOptionsActive(state, action: PayloadAction<{value: string}>) {
      state.playerOptionsModal = modalActiveAccordion(
        state.playerOptionsModal,
        action.payload.value
      );
    },
  },
});

export const selectGameModal = (state: TypeRootState) => state.gameModal;

export const gameModalAction = gameModalSlice.actions;

export const gameModalReducer = gameModalSlice.reducer;
