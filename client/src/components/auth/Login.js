/*

IF logged in
  go back to breweries
IF NOT
  login screen

*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

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
  const handleSubmit = ev => {
    ev.preventDefault();
    login(email, password);
  }

  if (isAuthenticated) {
    return <Redirect to='/' />
  }
  return (
    <div>
      <form onSubmit={ev => handleSubmit(ev)}>
        <input
          type='email'
          placeholder='email'
          name='email'
          value={email}
          onChange={ev => handleChange(ev)}
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          value={password}
          onChange={ev => handleChange(ev)}
        />
        <input
          type='submit'
          value='Login'
        />
      </form>
    </div>
  )
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);