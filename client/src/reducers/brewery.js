// Import action types
import {
  GET_BREWERIES
} from '../actions/types';

const initialState = {
  breweries: [],
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
    default:
      return state;
  }
}