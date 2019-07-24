import React from 'react';
import { Route } from 'react-router-dom';

// Routes
import PrivateRoute from '../routing/PrivateRoute';
import Alert from '../layout/Alert';
import CreateBrewery from '../brewery-forms/CreateBrewery';
import EditBrewery from '../brewery-forms/EditBrewery';
import AddBeer from '../brewery-forms/AddBeer';
import Login from '../auth/Login';
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/new-brewery' component={CreateBrewery} />
      <PrivateRoute exact path='/breweries/:id/edit' component={EditBrewery} />
      <PrivateRoute exact path='/breweries/:id/beers' component={AddBeer} />
      <Route component={NotFound} />
    </section>
  )
}

export default Routes;