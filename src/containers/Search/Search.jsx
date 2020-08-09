import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import queryString from 'query-string';
import styles from './Search.module.scss';

import { getCountriesSearch } from '../../api/api';
import history from '../../utils/history';

class Search extends React.Component {
  state = {
    query: queryString.parse(this.props.location.search).q || '',
    searching: true,
    results: null,
    error: null,
  };
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object,
  };
  async componentDidMount() {
    try {
      const { query } = this.state;
      if (query) {
        const results = await getCountriesSearch(query);
        this.setState({
          results,
          searching: false,
        });
      }
    } catch (err) {
      this.setState({ error: err.message, searching: false });
    }
  }

  async componentDidUpdate() {
    try {
      const { query, searching } = this.state;
      if (query && searching) {
        const results = await getCountriesSearch(query);
        console.dir(results);
        this.setState({
          results,
          searching: false,
        });
      }
    } catch (err) {
      this.setState({
        error: err.message,
        searching: false,
      });
    }
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const { url } = this.props.match;
      history.push(`${url}?q=${event.target.value}`);
      this.setState({
        query: event.target.value,
        searching: true,
        results: null,
        error: null,
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
      searching: false,
    });
  };

  render() {
    const { query, results, error } = this.state;

    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={styles.searchBar}>
            <input
              placeholder="Search for a country"
              value={query}
              onChange={this.handleChange}
              spellCheck="false"
              autoComplete="off"
              onKeyDown={this.handleKeyDown}
            />
            <FaSearch size={28} />
          </div>
        </div>
        {error && <div className={styles.results}>{error}</div>}
        {results &&
          results.map(({ name: country, flag }) => (
            <div key={country} className={styles.results}>
              {country}
            </div>
          ))}
      </React.Fragment>
    );
  }
}

export default Search;
