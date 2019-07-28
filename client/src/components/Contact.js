import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Alert from './layout/Alert';

import { connect } from 'react-redux';
import { sendEmail } from '../actions/contact';


const Contact = ({ sendEmail }) => {
  const [ formData, setFormData ] = useState({
    email: '',
    subject: '',
    msg: ''
  });

  const { email, subject, msg } = formData;
  const handleChange = ev => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };
  const handleSubmit = ev => {
    ev.preventDefault();
    console.log(formData);
    sendEmail(formData);
    setFormData({
      email: '',
      subject: '',
      msg: ''
    });
  }

  return (
    <Fragment>
      <div className='hero center main-splash breweries-bg'>
        <h1 className='large halo'>Contact</h1>
      </div>
      <div className='container'>
        <Alert />
        <div className='contact'>
          <h2 className='head secondary'>Please Contact Me!</h2>
          <p className='text-p'>
            I would love to be hired! I am free to assist people with their open-source projects! If you are new to the programming world, I would love to help ya out! If you have any questions, comments, or suggestions for <span className='highlight'>Phila Brews</span>, please feel free to let me know. I am also in the early stages of developing a sister app for <span className='highlight'>Phila Brews</span>. Check out the <Link to='/about'>About</Link> page for more information, and if you would like to contribute, please shoot me an email!
          </p>
        </div>
        <div className='contact'>
          <h2 className='head secondary'>Email Me</h2>
          <form className='form' onSubmit={ev => {handleSubmit(ev)}}>
            <div className='form-group'>
              <input
                type='email'
                name='email'
                id='email'
                onChange={ev => {handleChange(ev)}}
                value={email}
                placeholder='Email address'
              />
              <input
                type='text'
                name='subject'
                id='subject'
                onChange={ev => {handleChange(ev)}}
                value={subject}
                placeholder='Subject line'
              />
              <textarea
                placeholder='Write your message'
                rows='5'
                id='msg'
                name='msg'
                onChange={ev => {handleChange(ev)}}
                value={msg}
              ></textarea>
              <input
                type='submit'
                className='btn btn-primary'
                value='Submit'
              />
            </div>
          </form>
        </div>
        <div className='contact'>
          <h2 className='head secondary'>Social Media</h2>
          <div>
            <div className='contact-social'>
              <a href='https://www.twitter.com/daveregg' target='_blank' rel='noopener noreferrer'><i className='fab fa-twitter fa-3x'></i></a>
            </div>
            <div className='contact-social'>
              <a href='https://www.github.com/drregg6' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe fa-3x'></i></a>
            </div>
            <div className='contact-social'>
              <a href='https://www.instagram.com/dave.regg' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram fa-3x'></i></a>
            </div>
            <div className='contact-social'>
              <a href='https://www.linkedin.com/daveregg' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin fa-3x'></i></a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
};

Contact.propTypes = {
  sendEmail: PropTypes.func.isRequired
};

export default connect( null, { sendEmail } )(Contact);