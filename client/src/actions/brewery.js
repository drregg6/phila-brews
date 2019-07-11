/*

= GET_BREWERY
= GET_BEERS
= GET_BEER(?)
= ADD_BREWERY / UPDATE_BREWERY
= ADD BEER / UPDATE_BEER
= DELETE BREWERY
= DELETE BEER

*/
import axios from 'axios';

import {
  GET_BREWERIES
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