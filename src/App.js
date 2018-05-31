import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './containers/HomePage';

class App extends Component {

  render () {
    return (
      <Switch>
        <Route path="/robots" component={HomePage} />
        <Redirect to="/robots" />
      </Switch>
    );
  }
}

export default App;


