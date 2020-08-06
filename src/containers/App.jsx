import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.scss';
import Map from '../components/Map/Map.jsx';

export default class App extends React.Component {
  state = {

  };
  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/map">Map</Link>
        <Route
          exact path="/"
          component={() => <h1 className="big dark">Geoscape</h1>}
        ></Route>
        <Route path="/map" component={Map}></Route>
      </Router>
    ); 
  }
}