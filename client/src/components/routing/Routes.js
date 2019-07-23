import React from 'react';
import { Route } from 'react-router-dom';

// Routes
import PrivateRoute from '../routing/PrivateRoute';
import Alert from '../layout/Alert';
import Brewery from '../brewery/Brewery';
import CreateBrewery from '../brewery-forms/CreateBrewery';
import EditBrewery from '../brewery-forms/EditBrewery';
import AddBeer from '../brewery-forms/AddBeer';
import Login from '../auth/Login';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Route exact path='/login' component={Login} />
      <Route exact path='/breweries/:id' component={Brewery} />
      <PrivateRoute exact path='/new-brewery' component={CreateBrewery} />
      <PrivateRoute exact path='/breweries/:id/edit' component={EditBrewery} />
      <PrivateRoute exact path='/breweries/:id/beers' component={AddBeer} />
    </section>
  )
}

export default Routes;