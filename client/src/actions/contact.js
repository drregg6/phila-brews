import {
  SEND_EMAIL,
  EMAIL_ERROR
} from './types';
import axios from 'axios';
import { setAlert } from '../actions/alert';

export const sendEmail = formData => async dispatch => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  try {
    await axios.post('/api/contact', formData, config);
    dispatch({ type: SEND_EMAIL });
    dispatch(setAlert('Email sent!', 'success'));
  } catch (err) {
    dispatch({
      type: EMAIL_ERROR
    });
  }
}