// Import action types
import {
  GET_BREWERIES,
  GET_BREWERY,
  UPDATE_BREWERY,
  BREWERY_ERROR,
  DELETE_BREWERY
} from '../actions/types';

const initialState = {
  breweries: [],
  brewery: null,
  beers: [],
  errors: {},
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
    case UPDATE_BREWERY:
      return {
        ...state,
        breweries: [ ...state.breweries, payload ],
        loading: false
      }
    case BREWERY_ERROR:
      return {
        ...state,
        errors: payload
      }
    case DELETE_BREWERY:
      return {
        ...state,
        breweries: state.breweries.filter(brewery => brewery._id !== payload),
        loading: false
      }
    default:
      return state;
  }
}