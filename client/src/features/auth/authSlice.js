import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';


export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    await authService.login(user);
  } catch (error) {
    console.log(error);
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
})


// Reducer
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: true
  },
  reducers: {
    reset: (state) => {
      state.user = null;
      state.loading = true;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(login.pending, (state) => {
      state.loading = true
    })
    .addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    })
    .addCase(login.rejected, (state) => {
      state.loading = false;
    })
    .addCase(logout.fulfilled, (state) => {
      state.user = null;
    })
  }
})

export const {
  reset
} = authSlice.actions;

export default authSlice.reducer;