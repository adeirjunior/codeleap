import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


interface ThemeState {
  theme: string;
  isLoading: boolean;
  error: string | null;
}

const localStorageThemeName = localStorage.getItem("theme");

const initialState: ThemeState = {
  theme: localStorageThemeName || 'ligth',
  isLoading: false,
  error: null,
};

export const setTheme = createAsyncThunk("theme/setTheme", async (theme: string) => {
  localStorage.setItem("theme", theme);
  return theme;
});


const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setTheme.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(setTheme.fulfilled, (state, action) => {
        state.isLoading = false;
        state.theme = action.payload;
      })
      .addCase(setTheme.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Failed to add Theme.";
      })
  },
});

export default themeSlice.reducer;
