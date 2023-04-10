import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../constants';
import { Career } from '../../interfaces';

interface CareerState {
  careers: Career[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CareerState = {
  careers: [],
  isLoading: false,
  error: null,
};

export const fetchCareers = createAsyncThunk('career/fetchCareers', async () => {
  const response = await fetch(API_URL)
  console.log(response)
  return response.json()
})

export const deleteCareer = createAsyncThunk(
  'career/deleteCareer',
  async (careerId: number) => {
    const response = await fetch(`${API_URL}/${careerId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete career.');
    }
    return careerId;
  },
);

const careerSlice = createSlice({
  name: 'career',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCareers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCareers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.careers = action.payload;
      })
      .addCase(fetchCareers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Failed to fetch careers.';
      })
      .addCase(deleteCareer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCareer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.careers = state.careers.filter(
          (career) => career.id !== action.payload,
        );
      })
      .addCase(deleteCareer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Failed to delete career.';
      });
  },
});

export default careerSlice.reducer;
