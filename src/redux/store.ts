import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import careersReducer from "./features/careersSlice";

export const store = configureStore({
  reducer: {
    careers: careersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

