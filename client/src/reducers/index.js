import { combineReducers } from 'redux';

// Import separate reducers
import auth from './auth';
import brewery from './brewery';

export default combineReducers({
  auth,
  brewery
});