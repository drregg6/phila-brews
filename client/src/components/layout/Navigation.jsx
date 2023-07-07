import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navigation() {
  const { user } = useSelector((state) => state.auth);


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
          user && (
            <>
              <li>
                <Link to='/new-brewery'>New Brew</Link>
              </li>
            </>
          )
        }
      </ul>
    </div>
  )
}

export default Navigation;