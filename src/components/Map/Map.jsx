import React from 'react';

import { SVGMap } from 'react-svg-map';
import World from '@svg-maps/world';

import './Map.scss';

const Map = () => {
  return <SVGMap map={World}></SVGMap>;
};

export default Map;
