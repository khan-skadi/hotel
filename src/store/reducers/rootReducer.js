import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import hotelReducer from './hotelReducer.js';
import userReducer from './userReducer.js';

const rootReducer = combineReducers({
  hotel: hotelReducer,
  user: userReducer,
  toastr: toastrReducer
});

export default rootReducer;
