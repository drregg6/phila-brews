/*

TODO:
= modernization of react and redux
= use new hooks

*/

import React, { useEffect } from 'react';
import './App.css';

// Components
import Navigation from './components/layout/Navigation';
import Alert from './components/layout/Alert';
import Login from './components/auth/Login';
import Breweries from './components/Breweries';
import Contact from './components/Contact';
import About from './components/About';
import Brewery from './components/brewery/Brewery';
import CreateBrewery from './components/brewery-forms/CreateBrewery';
import EditBrewery from './components/brewery-forms/EditBrewery';
import AddBeer from './components/brewery-forms/AddBeer';
import NotFound from './components/layout/NotFound';
import Footer from './components/layout/Footer';

import PrivateRoute from './components/routing/PrivateRoute';

import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
          <Routes>
            <Route exact path='/' component={Breweries} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/breweries/:id' component={Brewery} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/new-brewery' component={CreateBrewery} />
            <PrivateRoute exact path='/breweries/:id/edit' component={EditBrewery} />
            <PrivateRoute exact path='/breweries/:id/beers' component={AddBeer} />
            <Route component={NotFound} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
