import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate('/');
  }

  return (
    <footer className='footer center py-2'>
      <span>
        &copy;{year} <a rel='noopener noreferrer' href='https://www.github.com/drregg6' target='_blank'>Dave Regg</a>
      </span>
      { user ? (
        <button onClick={onLogout} className='btn'>Logout</button>
      ) : (
        <span>
          <Link to='/login' className='btn'>Login</Link>
        </span>
      ) }
    </footer>
  )
}

export default Footer;