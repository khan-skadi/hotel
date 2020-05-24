import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/userActions.js';
import './Auth.css';

class SignIn extends Component {
  state = {
    username: '',
    password: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state);
    this.props.history.push('/dashboard');
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='section-signin'>
        <div className='wrapper fadeInDown'>
          <div id='formContent'>
            <div className='fadeIn first'>
              <h4 style={{ margin: '10px 0' }}>Login</h4>
            </div>

            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                id='login_username'
                className='fadeIn second'
                name='login_username'
                placeholder='Username'
                onChange={this.handleChange}
              />
              <input
                type='text'
                id='login_password'
                className='fadeIn third'
                name='login_password'
                placeholder='Password'
                onChange={this.handleChange}
              />

              <div style={{ margin: '10px 0' }}>
                Don't have an account ? <a href='/signup'>Sign up !</a>
              </div>
              <input type='submit' className='fadeIn fourth' value='Log In' />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { signIn })(SignIn);
