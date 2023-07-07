import { configureStore } from '@reduxjs/toolkit';
import breweryReducer from './features/brewery/brewerySlice';
import authReducer from './features/auth/authSlice';

export default configureStore({
  reducer: {
    brewery: breweryReducer,
    auth: authReducer
  }
});