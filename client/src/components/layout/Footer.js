// copyright @Dave Regg
// Admin Login
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer style={{display: 'flex', justifyContent: 'space-around'}}>
      <span>
        &copy;{year} <a rel='noopener noreferrer' href='https://www.github.com/drregg6' target='_blank'>Dave Regg</a>
      </span>
      <span>
        <Link to='/login'>Login</Link>
      </span>
    </footer>
  )
}

export default Footer;