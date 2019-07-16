/*

= GET_BEERS
= GET_BEER(?)
= UPDATE_BREWERY
= ADD BEER / UPDATE_BEER
= DELETE BREWERY
= DELETE BEER

*/
import axios from 'axios';
import { setAlert } from '../actions/alert';

import {
  GET_BREWERIES,
  GET_BREWERY,
  BREWERY_ERROR,
  UPDATE_BREWERY,
  DELETE_BREWERY
} from './types';

// Get all breweries
export const getBreweries = () => async dispatch => {
  try {
    let res = await axios.get('/api/breweries');
    dispatch({
      type: GET_BREWERIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BREWERY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get a single brewery
export const getBrewery = id => async dispatch => {
  try {
    let res = await axios.get(`/api/breweries/${id}`);
    dispatch({
      type: GET_BREWERY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BREWERY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

// Add or Update a Brewery
export const createBrewery = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }

    // axios call
    const res = await axios.post('/api/breweries', formData, config);
    dispatch({
      type: UPDATE_BREWERY,
      payload: res.data
    })
    dispatch(setAlert('Brewery Created'));
    
    history.push('/');
  } catch (err) {
    // used with express-validation error returns
    const errors = err.response.data.errors;
    if (errors) {
      // set status-type
      errors.forEach(error => dispatch(setAlert(error.msg)));
    }
    dispatch({
      type: BREWERY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

// Delete a brewery
export const deleteBrewery = (id) => async dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete(`/api/breweries/${id}`);
      dispatch({
        type: DELETE_BREWERY,
        payload: id
      });
      dispatch(setAlert('Brewery Removed'));
    } catch (err) {
      dispatch({
        type: BREWERY_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
}