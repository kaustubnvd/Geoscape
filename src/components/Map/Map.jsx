import React from 'react';

import { SVGMap } from 'react-svg-map';
import World from '@svg-maps/world';

import history from '../../utils/history';
import { getLocationName } from '../../utils/location';
import './Map.scss';

const WorldMap = () => {
  
  function handleMouseOver(event) {
    console.log(event.target.attributes.name.value);
  }

  function handleLocationClick(event) {
    history.push(`/${getLocationName(event)}`);
  }

  return (
    <SVGMap
      map={World}
      onLocationMouseOver={(event) => handleMouseOver(event)}
      onLocationClick={(event) => handleLocationClick(event)}
    ></SVGMap>
  );
};

export default WorldMap;
