import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface UserData {
  name: string;
  email: string;
  // other user data
}

interface UserState {
  userData: UserData | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  userData: null,
  status: 'idle',
  error: null,
};

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
  // Fetch user data from an API or other data source
  const response = await fetch('/api/user');
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.status = 'succeeded';
        state.userData = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default userSlice.reducer;