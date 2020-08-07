import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../utils/history';
import './App.scss';

import Nav from '../components/Nav/Nav.jsx';
import WorldMap from '../components/Map/Map.jsx';
import Location from '../containers/Location/Location.jsx';
import Search from '../containers/Search/Search.jsx';

export default class App extends React.Component {
  state = {};
  render() {
    return (
      <Router history={history}>
        <Nav />
        <Switch>
          <Route path="/" exact component={WorldMap} />
          <Route path="/search" component={Search} />
          <Route path="/:country" component={Location} />
        </Switch>
      </Router>
    );
  }
}
