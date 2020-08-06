import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ match }) => {
  const { country } = match.params;
  return <h1> {country} </h1>;
};

Location.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Location;
