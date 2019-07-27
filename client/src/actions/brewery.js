/*

= GET_BEERS(?) --> want a separate page to display all beers(?)
= GET_BEER(?) --> want a separate page for each beer(?)
= UPDATE_BEER
= DELETE BEER

*/
import axios from 'axios';
import { setAlert } from '../actions/alert';

import {
  GET_BREWERIES,
  GET_BREWERY,
  BREWERY_ERROR,
  UPDATE_BREWERY,
  DELETE_BREWERY,
  CLEAR_BREWERY,
  GET_BEER,
  ADD_BEER,
  DELETE_BEER
} from './types';

// Get all breweries
export const getBreweries = () => async dispatch => {
  dispatch({ type: CLEAR_BREWERY })
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
export const createBrewery = (formData, history, isUpdating = false) => async dispatch => {
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
    dispatch(setAlert(isUpdating ? 'Brewery Updated!' : 'Brewery Created!'), 'success');
    
    history.push('/');
  } catch (err) {
    // used with express-validation error returns
    const errors = err.response.data.errors;
    if (errors) {
      // set status-type
      errors.forEach(error => dispatch(setAlert(error.msg), 'danger'));
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
      dispatch(setAlert('Brewery Removed'), 'success');
    } catch (err) {
      dispatch({
        type: BREWERY_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
}

// Get a beer
export const getBeer = (brewery_id, beer_id) => async dispatch => {
  try {
    let res = await axios.get(`/api/breweries/${brewery_id}/beers/${beer_id}`);
    dispatch({
      type: GET_BEER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BREWERY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

// Add a beer
export const addBeer = (formData, id, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    const res = await axios.put(`/api/breweries/${id}/beers`, formData, config);
    dispatch({
      type: ADD_BEER,
      payload: res.data
    });

    dispatch(setAlert('Beer added!'), 'success');
    history.push(`/breweries/${id}`);
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.message), 'danger'))
    }
    dispatch({
      type: BREWERY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

// Delete a beer
export const deleteBeer = (breweryId, beerId) => async dispatch => {
  try {
    const res = await axios.delete(`/api/breweries/${breweryId}/beers/${beerId}`);
    dispatch({ type: CLEAR_BREWERY });
    dispatch({
      type: DELETE_BEER,
      payload: res.data
    });

    dispatch(setAlert('Beer removed!'), 'success');
  } catch (err) {
    dispatch({
      type: BREWERY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}