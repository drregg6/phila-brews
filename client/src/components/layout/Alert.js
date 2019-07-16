import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
  return (
    <div>
      { alerts !== null &&
        alerts.length > 0 &&
        alerts.map(alert => {
          return (
            <div key={alert.id}>
              {alert.msg}
            </div>
          )
        }) }
    </div>
  )
}

Alert.propTypes = {
  alerts: PropTypes.array
};

const mapStateToProps = state => ({
  alerts: state.alert
})

export default connect(
  mapStateToProps,
  {}
)(Alert);
