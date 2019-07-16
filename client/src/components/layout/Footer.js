// Admin Login
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Footer = ({ auth: { isAuthenticated }, logout }) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer style={{display: 'flex', justifyContent: 'space-around'}}>
      <span>
        &copy;{year} <a href='https://www.github.com/drregg6' target='_blank'>Dave Regg</a>
      </span>
      { isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <span>
          <Link to='/login'>Login</Link>
        </span>
      ) }
    </footer>
  )
}

Footer.propTypes = {
  auth: PropTypes.object,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logout }
)(Footer);