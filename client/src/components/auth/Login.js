/*

IF logged in
  go back to breweries
IF NOT
  login screen

*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;
  const handleChange = ev => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  }
  return (
    <div>
      <form onSubmit={(ev) => {
        ev.preventDefault();
        login(email, password);
      }}>
        <input type='text' placeholder='email' onChange={handleChange} />
        <input type='password' placeholder='password' onChange={handleChange} />
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

Login.propTypes = {
  state: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: PropTypes.func.isRequired
});

export default connect(
  mapStateToProps,
  { login }
)(Login);