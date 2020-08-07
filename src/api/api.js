import countryList from 'country-list';

function customCodes() {
  countryList.overwrite([
    {
      code: 'US',
      name: 'United States',
    },
    {
      code: 'GB',
      name: 'United Kingdom',
    },
    {
      code: 'RU',
      name: 'Russia',
    },
    {
      code: '	KR',
      name: 'South Korea',
    },
    {
      code: '	KP',
      name: 'North Korea',
    },
    {
      code: 'IR',
      name: 'Iran',
    },
    {
      code: 'BO',
      name: 'Bolivia',
    },
    {
      code: 'VE',
      name: 'Venezuela',
    },
    {
      code: 'VN',
      name: 'Vietnam',
    },
    {
      code: 'TW',
      name: 'Taiwan',
    },
    {
      code: 'CD',
      name: 'Democratic Republic of Congo',
    },
    {
      code: '	CV',
      name: 'Cape Verde',
    },
    {
      code: 'RE',
      name: 'Reunion',
    },
    {
      code: 'TF',
      name: 'French Southern and Antarctic Lands',
    },
  ]);
}

customCodes();

export async function getCountryData(country) {
  const countryCode = countryList.getCode(country);
  console.log(countryCode);
  const endpoint = `https://restcountries.eu/rest/v2/alpha/${countryCode}?fields=capital;flag;languages;currencies;population`;
  const res = await fetch(endpoint);
  const data = await res.json();
  return data;
}
