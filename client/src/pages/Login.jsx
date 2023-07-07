import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { login, reset } from '../features/auth/authSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, navigate, dispatch])

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
    const data = { email, password }

    dispatch(login(data));
  }

  return (
    <div className="container">
      <h1 className='large'>Admin Login</h1>
      <form
        onSubmit={ev => handleSubmit(ev)}
        className='form'
      >
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={ev => handleChange(ev)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={ev => handleChange(ev)}
          />
        </div>
        <div className='form-group'>
          <input
            type='submit'
            value='Login'
            className='btn'
          />
        </div>
      </form>
    </div>
  )
}

export default Login;