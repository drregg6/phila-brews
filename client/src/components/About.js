/*

= Get images of Philly for About and Contact
= Thank You section
    = Font awesome
    = Brad Traversy
    = Images

*/

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Fragment>
      <div className='hero center main-splash breweries-bg'>
        <h1 className='large halo'>About</h1>
      </div>
      <div className='container'>
        <div>
          <h2 className='head'>The Vision</h2>
          <p className='text-p'>
            Philadelphians are proud of their drinking tradition, and as a Philadelphian, I wanted to bring recognition to the microbrews of Philadelphia! What's better than getting a freshly made IPA, kegged just days ago in the same building? Patrons can talk to local brewers, or pick the brains of the bartenders. Breweries love locally sourced oats, wheat, barley, and hops. Local, informative, and delicious, microbrews are becoming easier to come by due to the trend picking up in the 2010s. <span className='highlight'>Phila Brews</span> is a one stop shop to keep track of the trends of local microbrews!
          </p>
        </div>
        <div>
          <h2 className='head'>The Steps</h2>
          <p className='text-p'>
            It all started with a dream over, what else, but a pint and a bowl of pretzels. It then went into planning mode - I learned how to create my own app using Node, Mongo, React, and Express. I then collected my data using both the internet and traversing the world and drinking locally! Finally, I developed my passion into this program. v1.0 is just the beginning - newer and bigger ideas are to come!
          </p>
        </div>
        <div>
          <h2 className='head'>Next Up</h2>
          <p className='text-p'>
            In the age of the 2000s, data rules us all! It all starts with breweries and tracking down happy hours there, but my ultimate goal is to develop an app that will track <span className='highlight'>all</span> the happy hours in Philadelphia, each day, every day. It will let the user know what which bar is closest, with what happy hour, the details of the happy hour, and if there is a happy hour food menu. This ambitious goal will need plenty of data collectors, so if you would like to join the project, please <Link to='/contact'>contact me</Link>, or simply shoot me an email with a bar name, location, and happy hour information! Thanks!
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default About;