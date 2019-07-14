/*

= BREWERIES (home)
= ABOUT
= ADD BREWERY (if logged in)

*/
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const Navigation = ({ isAuthenticated }) => {
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
          {
            isAuthenticated && (
              <li>
                <Link to="/breweries/new">Add Brewery</Link>
              </li>
            )
          }
        </ul>
      </nav>
    </React.Fragment>
  )
}

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {}
)(Navigation);