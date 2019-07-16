/*

= GET_BEERS
= GET_BEER(?)
= UPDATE_BREWERY
= ADD BEER / UPDATE_BEER
= DELETE BREWERY
= DELETE BEER

*/
import axios from 'axios';

import {
  GET_BREWERIES,
  GET_BREWERY,
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
    // dispatch an error
    console.error(err.message);
  }
};

// Get a single brewery
export const getBrewery = id => async dispatch => {
  try {
    let res = await axios.get(`/api/breweries/${id}`);
    dispatch({
      type: GET_BREWERY,
      payload: res.data
    })
  } catch (err) {
    console.log(err.message)
  }
}

// Add or Update a Brewery
export const createBrewery = formData => async dispatch => {
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
  } catch (err) {
    console.log(err.message);
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
    } catch (err) {
      console.error(err.message);
    }
  }
}