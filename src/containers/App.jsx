import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../utils/history';
import './App.scss';

import Nav from '../components/Nav/Nav.jsx';
import WorldMap from '../components/Map/Map.jsx';
import Location from '../containers/Location/Location.jsx';

export default class App extends React.Component {
  state = {};
  render() {
    return (
      <Router history={history}>
        <Nav />
        <Route exact path="/" component={WorldMap} />
        <Route path="/:country" component={Location}></Route>
      </Router>
    );
  }
}
