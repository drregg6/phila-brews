import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import BreweryAddress from './BreweryAddress';
import BreweryHours from './BreweryHours';
import BreweryInfo from './BreweryInfo';
import BreweryMap from './BreweryMap';

import { connect } from 'react-redux';
import { getBrewery } from '../../actions/brewery';
import Beer from './Beer';

const Brewery = ({
  brewery: { brewery, loading },
  getBrewery,
  match,
  isAuthenticated
}) => {
  useEffect(() => {
    getBrewery(match.params.id)
  }, [getBrewery, match.params.id])
  return (
    <Fragment>
      { loading || brewery === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1>{brewery.name}</h1>
          <div>
            <BreweryInfo
              phone={brewery.phone}
              website={brewery.website}
              mailingList={brewery.mailingList}
              happyHour={brewery.happyHour}
            />
            <BreweryAddress
              building={brewery.building}
              street={brewery.street}
              city={brewery.city}
              state={brewery.state}
              zip={brewery.zip}
            />
            <BreweryHours
              hours={brewery.hours}
            />
            <BreweryMap
              lat={brewery.lat}
              lng={brewery.lng}
            />
            { brewery.beers.length > 0 ? (
              <Fragment>
                {brewery.beers.map(beer => {
                  return (
                    <Beer
                      key={beer._id}
                      beer={beer}
                      breweryId={match.params.id}
                    />
                  )
                })}
              </Fragment>
            ) : (
              <Fragment>
                Nothing yet.
              </Fragment>
            ) }
          </div>
          { isAuthenticated && (
            <Fragment>
              <div>
                <Link to={`/breweries/${match.params.id}/beers`}>Add a beer</Link>
              </div>
              <div>
                <Link to={`/breweries/${match.params.id}/edit`}>Edit this brewery</Link>
              </div>
            </Fragment>
          ) }
        </Fragment>
      ) }
  </Fragment>
  )
}

Brewery.propTypes = {
  brewery: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  brewery: state.brewery,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getBrewery }
)(Brewery);