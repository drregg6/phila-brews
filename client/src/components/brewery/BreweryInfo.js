import React from 'react'
import PropTypes from 'prop-types'

const BreweryInfo = ({
  phone,
  website,
  mailingList,
  happyHour: { available }
}) => {
  return (
    <div>
      <ul>
        <li>{phone}</li>
        <li>{website}</li>
        <li>{mailingList}</li>
        <li>{available}</li>
      </ul>
    </div>
  )
}

BreweryInfo.propTypes = {
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  mailingList: PropTypes.bool.isRequired,
  happyHour: PropTypes.object.isRequired
}

export default BreweryInfo;