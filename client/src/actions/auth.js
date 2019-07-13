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
  LOGOUT_USER
} from './types';
import setAuthToken from '../utils/setAuthToken';

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
    console.log(err.message);
    // dispatch({
    //   type: AUTH_ERROR
    // })
  }
}

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password })

  // Should return a token
  try {
    const res = await axios.post('/api/auth', body, config);
    
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    console.error(err.message);
  }
}

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_USER });
}