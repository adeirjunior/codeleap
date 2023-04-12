import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import careersReducer from "./features/careersSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    careers: careersReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
