import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import HomePage from './containers/HomePage';

class App extends Component {

  render () {
    return (
      <Switch>
        <Route path="/robot-friends" component={HomePage} />
        <Redirect to="/robot-friends" />
      </Switch>
    );
  }
}

export default App;


