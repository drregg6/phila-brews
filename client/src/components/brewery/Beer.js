import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Beer = ({
  beer: { name, abv, description, type, img }
}) => {
  return (
    <div>
      {name}
    </div>
  )
}

Beer.propTypes = {
  beer: PropTypes.object.isRequired
}

export default connect(
  null,
  {}
)(Beer);