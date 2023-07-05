// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

// import rootReducer from './reducers';

// const initialState = {};
// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

import { configureStore } from '@reduxjs/toolkit';
import breweryReducer from './features/brewery/brewerySlice';
import alertReducer from './features/alert/alertSlice';
import authReducer from './features/auth/authSlice';

export default configureStore({
  reducer: {
    brewery: breweryReducer,
    alert: alertReducer,
    auth: authReducer
  }
});