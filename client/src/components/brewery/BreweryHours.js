import React from 'react';
import PropTypes from 'prop-types';

const BreweryHours = ({
  hours
}) => {
  return (
    <div>
      <h2 className='head underline'>Hours</h2>
      <ul className='brewery-hours'>
        <li>
          <span className='strong'>Monday:</span><br />{hours.monIsOpen ? (
            `${hours.monOpen} - ${hours.monClose}`
          ) : ('Closed')}
        </li>
        <li>
        <span className='strong'>Tuesday:</span><br />{hours.tuesIsOpen ? (
            `${hours.tuesOpen} - ${hours.tuesClose}`
          ) : ('Closed')}
        </li>
        <li>
        <span className='strong'>Wednesday:</span><br />{hours.wedIsOpen ? (
            `${hours.wedOpen} - ${hours.wedClose}`
          ) : ('Closed')}
        </li>
        <li>
        <span className='strong'>Thursday:</span><br />{hours.thursIsOpen ? (
            `${hours.thursOpen} - ${hours.thursClose}`
          ) : ('Closed')}
        </li>
        <li>
        <span className='strong'>Friday:</span><br />{hours.friIsOpen ? (
            `${hours.friOpen} - ${hours.friClose}`
          ) : ('Closed')}
        </li>
        <li>
        <span className='strong'>Saturday:</span><br />{hours.satIsOpen ? (
            `${hours.satOpen} - ${hours.satClose}`
          ) : ('Closed')}
        </li>
        <li>
        <span className='strong'>Sunday:</span><br />{hours.sunIsOpen ? (
            `${hours.sunOpen} - ${hours.sunClose}`
          ) : ('Closed')}
        </li>
      </ul>
    </div>
  )
}

BreweryHours.propTypes = {
  hours: PropTypes.object.isRequired
}

export default BreweryHours;