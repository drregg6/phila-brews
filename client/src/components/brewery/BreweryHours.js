import React from 'react';
import PropTypes from 'prop-types';

const BreweryHours = ({
  hours
}) => {
  return (
    <div>
      <ul>
        <li>
          Monday: {hours.monIsOpen ? (
            `${hours.monOpen} - ${hours.monClose}`
          ) : ('Closed')}
        </li>
        <li>
          Tuesday: {hours.tuesIsOpen ? (
            `${hours.tuesOpen} - ${hours.tuesClose}`
          ) : ('Closed')}
        </li>
        <li>
          Wednesday: {hours.wedIsOpen ? (
            `${hours.wedOpen} - ${hours.wedClose}`
          ) : ('Closed')}
        </li>
        <li>
          Thursday: {hours.thursIsOpen ? (
            `${hours.thursOpen} - ${hours.thursClose}`
          ) : ('Closed')}
        </li>
        <li>
          Friday: {hours.friIsOpen ? (
            `${hours.friOpen} - ${hours.friClose}`
          ) : ('Closed')}
        </li>
        <li>
          Saturday: {hours.satIsOpen ? (
            `${hours.satOpen} - ${hours.satClose}`
          ) : ('Closed')}
        </li>
        <li>
          Sunday: {hours.sunIsOpen ? (
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