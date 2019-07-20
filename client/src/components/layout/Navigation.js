import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const Navigation = ({ auth: {loading, isAuthenticated} }) => {
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
            !loading && isAuthenticated && (
              <li>
                <Link to='/breweries/new'>New Brewery</Link>
              </li>
            )
          }
        </ul>
      </nav>
    </React.Fragment>
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