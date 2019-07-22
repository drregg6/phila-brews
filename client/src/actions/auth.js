/*

Registering a user will not be handled in this app
Typically, registering will be handled in a user.js action

= LOGIN_USER
= LOGOUT_USER

*/
import axios from 'axios';
import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  AUTH_ERROR,
  LOGIN_FAIL
} from './types';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';

// Load user
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
}

export const login = (email, password) => async dispatch => {
  
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });
  console.log('Trying to send to database: ' + body);
  // Should return a token
  try {
    const res = await axios.post('/api/auth', body, config);
    
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
    dispatch(setAlert('Admin login. Welcome!', 'success'))
  } catch (err) {
    // Custom response generated from the server side
    // I created this :)
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({ type: LOGIN_FAIL });
  }
}

export const logout = (history) => dispatch => {
  dispatch(setAlert('Successfully logged out, bye!', 'danger'))
  dispatch({ type: LOGOUT_USER });

  history.push('/');
}