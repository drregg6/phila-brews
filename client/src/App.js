import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navigation from './components/layout/Navigation';
import Breweries from './components/Breweries';
import Brewery from './components/brewery/Brewery';
import CreateBrewery from './components/brewery-forms/CreateBrewery';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path='/' component={Breweries} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/breweries/new' component={CreateBrewery} />
          <Route exact path='/breweries/:id' component={Brewery} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
