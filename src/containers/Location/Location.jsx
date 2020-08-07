import React from 'react';
import PropTypes from 'prop-types';

import { getCountryData } from '../../api/api';

class Location extends React.Component {
  state = {
    country: this.props.match.params.country,
    countryData: null,
  };
  async componentDidMount() {
    const { country } = this.state;
    let countryData = await getCountryData(country);
    console.log(countryData);
    this.setState({
      countryData,
    });
  }
  render() {
    const { countryData } = this.state;
    if (!countryData) {
      return <h2>Loading</h2>;
    }
    const { country } = this.state;
    const { capital, flag, languages, population, currencies } = countryData;
    console.log(languages, currencies);

    return (
      <React.Fragment>
        <h1>{country}</h1>
        <img src={flag} alt={country}></img>
        <h2>Capital: {capital}</h2>
        <h2>Population: {population.toLocaleString()}</h2>
        <h2>
          Languages:
          <ul>
            {languages.map((language) => (
              <li key={language.iso639_1}>
                {language.name}
              </li>
            ))}
          </ul>
        </h2>
        <h2>
          Currencies:
          <ul>
            {currencies.map((currency) => (
              <li key={currency.code}>
                {`${currency.name} (${currency.symbol})`}
              </li>
            ))}
          </ul>
        </h2>
      </React.Fragment>
    );
  }
}

Location.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Location;
