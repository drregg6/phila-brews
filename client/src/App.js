/*

TODO:
= EditBeer
= alertType is not working
= Images for About and Contact
= Contact form
= Set up for deployment
= Populate database

*/

import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navigation from './components/layout/Navigation';
import Breweries from './components/Breweries';
import Contact from './components/Contact';
import About from './components/About';
import Brewery from './components/brewery/Brewery';
import Routes from './components/routing/Routes';
import Footer from './components/layout/Footer';

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
          <Switch>
            <Route exact path='/' component={Breweries} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/breweries/:id' component={Brewery} />
            <Route component={Routes} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
