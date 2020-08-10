import countryList from 'country-list';
import { customCodes } from './overwrite';

// Overwrites the country code values for certain countries
customCodes();

export async function getCountryData(country) {
  const countryCode = countryList.getCode(country);
  // Country name doesn't correspond to a particular code
  if (!countryCode) {
    throw new Error(`No country data found for ${country}`);
  }
  const endpoint = `https://restcountries.eu/rest/v2/alpha/${countryCode}?fields=capital;flag;languages;currencies;population`;
  const res = await fetch(endpoint);
  const data = await res.json();
  return data;
}

export async function getCountriesSearch(query) {
  const endpoint = `https://restcountries.eu/rest/v2/name/${query}?fields=name;flag;alpha2Code`;
  const res = await fetch(endpoint);
  if (res.status === 404) {
    throw new Error(`No Results found for ${query}`);
  }
  const data = await res.json();
  return data;
}
