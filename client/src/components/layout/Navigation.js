import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Navigation = ({ auth: { isAuthenticated }, logout }) => {
  return (
    <React.Fragment>
      <nav>
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
          { isAuthenticated ? (
            <React.Fragment>
              <li>
                <Link to="/breweries/new">Add Brewery</Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </React.Fragment>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) }
        </ul>
      </nav>
    </React.Fragment>
  )
}

Navigation.propTypes = {
  auth: PropTypes.object,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navigation);