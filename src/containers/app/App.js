import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { SET_AUTHENTICATED } from '../../store/actions/types.js';
import ReduxToastr from 'react-redux-toastr';
import store from '../../store/store.js';
import axios from 'axios';

import Dashboard from '../dashboard/Dashboard.js';
import AuthRoute from '../../util/AuthRoute.js';
import Navbar from '../navbar/Navbar.js';
import Hotel from '../hotel/Hotel.js';
import SignIn from '../auth/SignIn.js';
import SignUp from '../auth/SignUp.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

axios.defaults.baseUrl = 'http://localhost:8000/';

const token = localStorage.FBIdToken;
if (token) {
  store.dispatch({ type: SET_AUTHENTICATED });
  axios.defaults.headers.common['Authorization'] = token;
}

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position='top-right'
        getState={(state) => state.toastr}
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        closeOnToastrClick
      />
      <Switch>
        <Redirect exact from='/' to='/login' />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/hotel/:id' component={Hotel} />
        <AuthRoute exact path='/login' component={SignIn} />
        <AuthRoute exact path='/signup' component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
