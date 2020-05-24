import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/userActions.js';
import './Auth.css';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
    this.props.history.push('/');
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div className='section-signup'>
        <div className='wrapper fadeInDown'>
          <div id='formContent'>
            <div className='fadeIn first'>
              <h4 style={{ margin: '10px 0' }}>Sign Up</h4>
            </div>

            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                id='username'
                className='fadeIn second'
                name='username'
                placeholder='Username'
                onChange={this.handleChange}
              />
              <input
                type='text'
                id='password'
                className='fadeIn second'
                name='password'
                placeholder='Password'
                onChange={this.handleChange}
              />
              <input
                type='text'
                id='email'
                className='fadeIn third'
                name='email'
                placeholder='Email'
                onChange={this.handleChange}
              />
              <input
                type='text'
                id='first_name'
                className='fadeIn third'
                name='first_name'
                placeholder='First Name'
                onChange={this.handleChange}
              />
              <input
                type='text'
                id='last_name'
                className='fadeIn fourth'
                name='last_name'
                placeholder='Last Name'
                onChange={this.handleChange}
              />

              <input type='submit' className='fadeIn fourth' value='Sign Up' />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { signUp })(withRouter(SignUp));
