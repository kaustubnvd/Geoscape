import React from 'react';

import { SVGMap } from 'react-svg-map';
import World from '@svg-maps/world';

import history from '../../utils/history';
import { getLocationName } from '../../utils/location';
import './Map.scss';

class WorldMap extends React.Component {
  state = {
    hovering: false,
    country: null,
    x: 0,
    y: 0,
  };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  handleMouseOver = (event) => {
    this.setState({
      hovering: true,
      country: getLocationName(event),
    });
  };

  handleLocationMouseOut = (event) => {
    this.setState({
      hovering: false,
      country: null,
    });
  };

  handleLocationClick = (event) => {
    history.push(`/${getLocationName(event)}`);
  };

  render() {
    const { hovering, country, x, y } = this.state;
    const tooltipPosition = {
      top: `${y - 20}px`,
      left: `${x + 20}px`,
    };

    return (
      <div onMouseMove={(event) => this.handleMouseMove(event)}>
        <SVGMap
          map={World}
          onLocationMouseOver={(event) => this.handleMouseOver(event)}
          onLocationMouseOut={(event) => this.handleLocationMouseOut(event)}
          onLocationClick={(event) => this.handleLocationClick(event)}
        ></SVGMap>
        {hovering && (
          <div className="tooltip-container">
            <span id="tooltip" className="tooltip" style={tooltipPosition}>
              {country}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default WorldMap;
