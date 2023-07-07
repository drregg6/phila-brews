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
          <span className='strong'>Monday:</span><br />{!hours || !hours.monIsOpen ? 'Closed' :
          (
            `${hours.monOpen} - ${hours.monClose}`
          )}
        </li>
        <li>
        <span className='strong'>Tuesday:</span><br />{!hours || !hours.tuesIsOpen ? 'Closed' :
        (
          `${hours.tuesOpen} - ${hours.tuesClose}`
        )}
        </li>
        <li>
        <span className='strong'>Wednesday:</span><br />{!hours || !hours.wedIsOpen ? 'Closed' :
          (
            `${hours.wedOpen} - ${hours.wedClose}`
          )}
        </li>
        <li>
        <span className='strong'>Thursday:</span><br />{!hours || !hours.thursIsOpen ? 'Closed' :
          (
            `${hours.thursOpen} - ${hours.thursClose}`
          )}
        </li>
        <li>
        <span className='strong'>Friday:</span><br />{!hours || !hours.friIsOpen ? 'Closed' :
          (
            `${hours.friOpen} - ${hours.friClose}`
          )}
        </li>
        <li>
        <span className='strong'>Saturday:</span><br />{!hours || !hours.satIsOpen ? 'Closed' :
          (
            `${hours.satOpen} - ${hours.satClose}`
          )}
        </li>
        <li>
        <span className='strong'>Sunday:</span><br />{!hours || !hours.sunIsOpen ? 'Closed' :
          (
            `${hours.sunOpen} - ${hours.sunClose}`
          )}
        </li>
      </ul>
    </div>
  )
}

BreweryHours.propTypes = {
  hours: PropTypes.object.isRequired
}

export default BreweryHours;