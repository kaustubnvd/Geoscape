import countryList from 'country-list';
import { customCodes } from './overwrite';

// Overwrites the country code values for certain countries
customCodes();

export async function getCountryData(country) {
  const countryCode = countryList.getCode(country);
  // Country name doesn't correspond to a particular code
  if (!countryCode) {
    throw new Error(`Unable to fetch country data for ${country}`);
  }
  const endpoint = `https://restcountries.eu/rest/v2/alpha/${countryCode}?fields=capital;flag;languages;currencies;population`;
  const res = await fetch(endpoint);
  const data = await res.json();
  return data;
}
