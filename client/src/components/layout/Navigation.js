/*

= BREWERIES (home)
= ABOUT
= ADD BREWERY

*/
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const Navigation = props => {
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
        </ul>
      </nav>
    </React.Fragment>
  )
}

Navigation.propTypes = {

}

export default connect(
  null,
  {}
)(Navigation);