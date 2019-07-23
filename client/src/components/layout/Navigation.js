import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const Navigation = ({ auth: {loading, isAuthenticated} }) => {
  return (
    <div className='navbar bg-dark'>
      <h1 className='logo'>
        <Link to='/'>
          <i className='fas fa-beer'></i> Phila Brews
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {
          !loading && isAuthenticated && (
            <li>
              <Link to='/new-brewery'>New Brewery</Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}

Navigation.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Navigation);