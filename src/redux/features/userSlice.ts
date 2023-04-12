import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { User} from '../../interfaces'

interface UserState {
  user: User;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: {
    name: ''
  },
  isLoading: false,
  error: null,
};

export const addUser = createAsyncThunk(
  'user/addUser',
  async (user: User | undefined) => {
    return user;
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
  },
});

export default userSlice.reducer;
