import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navigation from './components/layout/Navigation';
import Breweries from './components/Breweries';
import Brewery from './components/brewery/Brewery';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path='/' component={Breweries} />
          <Route exact path='/breweries/:id' component={Brewery} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
