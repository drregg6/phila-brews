import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
  return (
    <div style={{marginTop: '3rem'}}>
      { alerts !== null &&
        alerts.length > 0 &&
        alerts.map(alert => {
          return (
            <div key={alert.id} className={`alert-${alert.alertType}`}>
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
