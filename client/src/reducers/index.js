import { combineReducers } from 'redux';

// Import separate reducers
import authReducer from './auth';
import breweryReducer from './brewery';
import alertReducer from './alert';

export default combineReducers({
  authReducer,
  alertReducer,
  breweryReducer
});