import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.scss';
import Map from '../components/Map/Map.jsx';

export default class App extends React.Component {
  state = {

  };
  render() {
    return (
      <Map />
    ); 
  }
}