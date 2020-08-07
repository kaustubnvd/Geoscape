import React from 'react';
import { FaMapMarkerAlt, FaMale, FaLanguage, FaMoneyBill } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { getCountryData } from '../../api/api';
import styles from './Location.module.scss';

class Location extends React.Component {
  state = {
    country: this.props.match.params.country,
    countryData: null,
  };
  static propTypes = {
    match: PropTypes.object.isRequired,
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
      <main className={styles.main}>
        <section>
          <h1>{country}</h1>
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
                  {`${currency.name} ${currency.symbol ? `(${currency.symbol})` : ''}`}
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
