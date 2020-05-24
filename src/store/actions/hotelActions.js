import axios from 'axios';
import {
  GET_ALL_HOTELS,
  GET_ALL_HOTELS_ERR,
  SET_LOADING,
  SET_CURRENT,
  SET_CURRENT_ERR
} from './types.js';

const url = 'http://127.0.0.1:8000/hotel_api/';

export const getAllHotels = () => (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });

    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.FBIdToken
        }
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: GET_ALL_HOTELS,
          payload: res.data
        });
      });
  } catch (err) {
    dispatch({
      type: GET_ALL_HOTELS_ERR,
      payload: err.message
    });
  }
};

export const setCurrent = (hotel) => (dispatch) => {
  try {
    const id = hotel.id;
    dispatch({ type: SET_LOADING });

    axios
      .get(`${url}${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.FBIdToken
        }
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: SET_CURRENT,
          payload: res.data
        });
      });
  } catch (err) {
    dispatch({
      type: SET_CURRENT_ERR,
      payload: err.message
    });
  }
};
