import { combineReducers } from 'redux';

// Import separate reducers
import auth from './auth';
import brewery from './brewery';
import alert from './alert';

export default combineReducers({
  auth,
  alert,
  brewery
});