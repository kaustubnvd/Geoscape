import React from 'react';

import { SVGMap } from 'react-svg-map';
import World from '@svg-maps/world';

import './Map.scss';

const WorldMap = () => {
  return <SVGMap map={World} onLocationMouseOver={(event) => console.log(event.target.attributes.name.value)}></SVGMap>;
};

export default WorldMap;
