// Import action types
import {
  GET_BREWERIES,
  GET_BREWERY
} from '../actions/types';

const initialState = {
  breweries: [],
  brewery: null,
  beers: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BREWERIES:
      return {
        ...state,
        breweries: payload,
        loading: false
      }
    case GET_BREWERY:
      return {
        ...state,
        brewery: payload,
        loading: false
      }
    default:
      return state;
  }
}