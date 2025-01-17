import React from 'react';
import {
  FaMapMarkerAlt,
  FaMale,
  FaLanguage,
  FaMoneyBill,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';

import { getCountryData } from '../../api/api';
import styles from './Location.module.scss';

class Location extends React.Component {
  state = {
    country: this.props.match.params.country,
    countryData: null,
    error: null,
  };
  static propTypes = {
    match: PropTypes.object.isRequired,
  };
  async componentDidMount() {
    try {
      const { country } = this.state;
      let countryData = await getCountryData(country);
      this.setState({
        countryData,
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  }
  render() {
    const { countryData, error } = this.state;
    if (!countryData && !error) {
      return (
        <div className={styles.loading}>
          <ClipLoader size={150} color={'#123abc'} />
        </div>
      );
    }

    if (error) {
      return <h1 className={styles.error}>{error}</h1>;
    }

    const { country } = this.state;
    const { capital, flag, languages, population, currencies } = countryData;

    return (
      <main className={styles.main}>
        <section>
          <h1>{country.charAt(0).toUpperCase() + country.slice(1)}</h1>
          <h2 className={styles.h2}>
            <FaMapMarkerAlt color="#4d82d1" size={22} />
            <span>Capital: {capital}</span>
          </h2>
          <h2 className={styles.h2}>
            <FaMale color="#4d82d1" size={22} />
            <span>Population: {population.toLocaleString()}</span>
          </h2>
          <h2 className={styles.list}>
            <div>
              <FaLanguage color="#4d82d1" size={22} />
              <span>Languages:</span>
            </div>
            <ul>
              {languages.map((language) => (
                <li key={language.iso639_1}>{language.name}</li>
              ))}
            </ul>
          </h2>
          <h2 className={styles.list}>
            <div>
              <FaMoneyBill color="#4d82d1" size={22} />
              <span>Currencies:</span>
            </div>
            <ul>
              {currencies.map((currency) => (
                <li key={currency.code}>
                  {`${currency.name} ${
                    currency.symbol ? `(${currency.symbol})` : ''
                  }`}
                </li>
              ))}
            </ul>
          </h2>
        </section>
        <img src={flag} alt={country}></img>
      </main>
    );
  }
}

export default Location;
