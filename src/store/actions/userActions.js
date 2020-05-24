import axios from 'axios';
import {
  SIGNUP_USER,
  SIGNUP_USER_ERR,
  LOGIN_USER,
  LOGIN_USER_ERR,
  SET_UNAUTHENTICATED
} from './types.js';
import { toastr } from 'react-redux-toastr';

const register = 'http://localhost:8000/register/';
const login = 'http://localhost:8000/api-token-auth/';

export const signUp = (newUser) => (dispatch) => {
  const user = {
    ...newUser
  };

  axios
    .post(register, user)
    .then((res) => {
      toastr.success('Welcome to Hotels!', 'Account created successfully!');
      dispatch({
        type: SIGNUP_USER,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: SIGNUP_USER_ERR,
        payload: err.message
      });
    });
};

export const signIn = (creds) => (dispatch) => {
  const credentials = {
    username: creds.login_username,
    password: creds.login_password
  };

  axios
    .post(login, credentials)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch({
        type: LOGIN_USER,
        payload: res.data
      });

      toastr.success('Welcome to Hotels!', 'Logged in successfully!');
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_USER_ERR,
        payload: err.message
      });
    });
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const setAuthorizationHeader = (token) => {
  const FBIdToken = `Token ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};
