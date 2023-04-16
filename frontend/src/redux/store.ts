import { configureStore } from "@reduxjs/toolkit";
import careersReducer from "./features/careersSlice";
import userReducer from "./features/userSlice";
import themeReducer from "./features/themeSlice";

export const store = configureStore({
  reducer: {
    careers: careersReducer,
    user: userReducer,
    theme: themeReducer
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
