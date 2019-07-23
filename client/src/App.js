/*

TODO:
= EditBeer
= Styles -> MOBILE FIRST

*/

import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Breweries from './components/Breweries';
import Routes from './components/routing/Routes';

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
            <Route component={Routes} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
