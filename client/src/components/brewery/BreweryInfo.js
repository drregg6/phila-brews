import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const BreweryInfo = ({
  phone,
  website,
  mailingList,
  happyHour
}) => {
  console.log(happyHour)
  return (
    <Fragment>
      <ul className='brewery-info'>
        <li><span className='strong'>Phone Number: </span> {phone}</li>
        <li><span className='strong'>Go</span> to their <a href={website} target='_blank' rel="noopener noreferrer">website</a></li>
        <li><span className='strong'>Mailing List: </span>{ mailingList ? 'Yep!' : 'Nope' }</li>
        <li><span className='strong'>Happy Hour: </span>{ happyHour.available ? 'Yep!' : 'Nope' }</li>
        { happyHour.available && (
          <Fragment>
            <li><span className='strong'>Begins: </span> { happyHour.happyOpen }</li>
            <li><span className='strong'>Ends: </span> { happyHour.happyClose }</li>
          </Fragment>
        )}
      </ul>
    </Fragment>
  )
}

BreweryInfo.propTypes = {
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  mailingList: PropTypes.bool.isRequired,
  happyHour: PropTypes.object.isRequired
}

export default BreweryInfo;