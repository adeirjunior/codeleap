import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { User} from '../../interfaces'

interface UserState {
  user: User;
  isLoading: boolean;
  error: string | null;
}

const localStorageUsername = localStorage.getItem('username')

const initialState: UserState = {
  user: {
    name: localStorageUsername || ''
  },
  isLoading: false,
  error: null,
};

export const addUser = createAsyncThunk(
  'user/addUser',
  async (user: User | undefined) => {
    if (user !== undefined) localStorage.setItem("username", user.name);
    return user;
  },
);

export const removeUser = createAsyncThunk(
  'user/removeUser',
  async () => {
    localStorage.removeItem("username")
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload !== undefined)
        state.user = action.payload
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Failed to add User.'
      })
      .addCase(removeUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload !== undefined)
        state.user.name = ''
      })
      .addCase(removeUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Failed to remove User.'
      })
  },
});

export default userSlice.reducer;
