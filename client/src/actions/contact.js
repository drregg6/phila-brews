import axios from 'axios';
import { SEND_EMAIL } from './types';

export const sendEmail = formData => async dispatch => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/contact', formData, config);
    console.log(res.data);
  } catch (err) {
    console.error(`Error from axios: ${err.message}`)
  }
}