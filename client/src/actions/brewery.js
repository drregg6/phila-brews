/*

= GET_BEERS
= GET_BEER(?)
= ADD_BREWERY / UPDATE_BREWERY
= ADD BEER / UPDATE_BEER
= DELETE BREWERY
= DELETE BEER

*/
import axios from 'axios';

import {
  GET_BREWERIES,
  GET_BREWERY
} from './types';

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