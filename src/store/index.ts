import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import searchReducer from "../features/search/store";
import modalReducer from "../features/modal/store";
import usersReducer from "../features/users/store";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    modal: modalReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
