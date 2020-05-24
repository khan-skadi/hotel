import {
  GET_ALL_HOTELS,
  GET_ALL_HOTELS_ERR,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../actions/types';

const initialState = {
  hotels: [],
  loading: false,
  current: {},
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_HOTELS:
      return {
        ...state,
        hotels: action.payload,
        loading: false,
        error: null
      };
    case GET_ALL_HOTELS_ERR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_CURRENT:
      return {
        ...state,
        loading: false,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        loading: false,
        current: {}
      };
    default:
      return state;
  }
}
