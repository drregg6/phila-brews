// Import types
import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_USER
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  user: null,
  isAuthenticated: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false
      }
    case LOGIN_SUCCESS:
      // payload = { user: { token, id }}
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
    case LOGOUT_USER:
    case LOGIN_FAILURE:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        user: null,
        loading: false
      }
    default:
      return state;
  }
}