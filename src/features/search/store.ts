import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/index";

interface SearchState {
  keyword: string;
}

const initialState: SearchState = {
  keyword: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
  },
});

export const { updateKeyword } = searchSlice.actions;
export const selectKeyword = (state: RootState) => state.search.keyword;
export default searchSlice.reducer;
