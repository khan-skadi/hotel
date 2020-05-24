import {
  SIGNUP_USER,
  SIGNUP_USER_ERR,
  LOGIN_USER,
  LOGIN_USER_ERR,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED
} from '../actions/types.js';

const initialState = {
  authenticated: false,
  users: [],
  loggedInUser: null,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SIGNUP_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        error: null
      };
    case SIGNUP_USER_ERR:
      return {
        ...state,
        error: action.payload
      };
    case LOGIN_USER:
      return {
        ...state,
        loggedInUser: action.payload,
        error: null
      };
    case LOGIN_USER_ERR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
