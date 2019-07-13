import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const CreateBrewery = () => {
  return (
    <div>
      <h1>ADD A NEW BREWERY</h1>
    </div>
  )
}

CreateBrewery.propTypes = {

}

export default connect(
  null,
  {}
)(CreateBrewery);