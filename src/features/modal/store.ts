import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/index";

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export const selectModalStatus = (state: RootState) => state.modal.isOpen;
export default modalSlice.reducer;
