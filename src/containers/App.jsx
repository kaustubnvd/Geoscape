import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';

import Nav from '../components/Nav/Nav.jsx';
import WorldMap from '../components/Map/Map.jsx';

export default class App extends React.Component {
  state = {};
  render() {
    return (
      <Router>
        <Nav />
        <Route exact path="/" component={WorldMap} />
      </Router>
    );
  }
}
