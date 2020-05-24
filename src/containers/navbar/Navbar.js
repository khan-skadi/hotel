import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { signOut } from '../../store/actions/userActions.js';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const { signOut, location } = props;

  const handleSignout = () => {
    signOut();
  };

  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/dashboard'>
        Hotels
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item active'>
            <a className='nav-link' href='#!'>
              Dashboard
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#!'>
              Favorites
            </a>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/login' onClick={handleSignout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps, { signOut })(withRouter(Navbar));
