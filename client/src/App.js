/*

TODO:
= EditBeer
= Add time formatter
= Add phone formatter
= Add OPEN / CLOSED functionality from previous app
= Styles -> MOBILE FIRST

*/

import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navigation from './components/layout/Navigation';
import Alert from './components/layout/Alert';
import Footer from './components/layout/Footer';
import Breweries from './components/Breweries';
import Brewery from './components/brewery/Brewery';
import CreateBrewery from './components/brewery-forms/CreateBrewery';
import EditBrewery from './components/brewery-forms/EditBrewery';
import AddBeer from './components/brewery-forms/AddBeer';
import Login from './components/auth/Login';

import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);
  
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Alert />
        <Switch>
          <Route exact path='/' component={Breweries} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/breweries/new' component={CreateBrewery} />
          <Route exact path='/breweries/:id' component={Brewery} />
          <Route exact path='/breweries/:id/edit' component={EditBrewery} />
          <Route exact path='/breweries/:id/beers' component={AddBeer} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
