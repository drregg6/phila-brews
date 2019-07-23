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
import isCurrentlyOpen from '../../utils/isCurrentlyOpen';

const Brewery = ({
  brewery: { brewery, loading },
  getBrewery,
  match,
  isAuthenticated
}) => {
  useEffect(() => {
    getBrewery(match.params.id);
  }, [getBrewery, match.params.id]);
  const currentlyOpen = loading || brewery === null ? '' : isCurrentlyOpen(brewery.hours);

  return (
    <div>
      { loading || brewery === null ? (
        <section className='container'>
          <Spinner />
        </section>
      ) : (
        <Fragment>
          <div
            className='hero center brewery-splash'
            style={{
              backgroundImage: `url(${brewery.img})`,
              backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.2) 100%), url(${brewery.img})`
            }}
          >
            <h1 className='halo'>
              {brewery.name}
            </h1>
            { currentlyOpen ? (
              <h4 className='brewery-sign success halo'>Open!</h4>
            ) : (
              <h4 className='brewery-sign danger halo'>Closed...</h4>
            )}
          </div>
          <div className='container'>
            {isAuthenticated && (
              <Link to={`/breweries/${match.params.id}/edit`} className='btn btn-edit-brewery'>Edit this brewery</Link>
            )}
            <div className='brewery-group'>
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
            </div>
            <BreweryMap
              name={brewery.name}
              lat={brewery.lat}
              lng={brewery.lng}
            />
            <h2 className='head underline'>Beers</h2>
            <div className='beers'>
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
                  <div></div>
                  <div>Nothing.</div>
                  <div>Yet.</div>
                  <div></div>
                </Fragment>
              ) }
            </div>
          </div>
          { isAuthenticated && (
            <Fragment>
              <Link to={`/breweries/${match.params.id}/beers`} className='btn'>Add a beer</Link>
            </Fragment>
          ) }
        </Fragment>
      ) }
  </div>
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