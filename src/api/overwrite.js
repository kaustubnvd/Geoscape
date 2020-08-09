import countryList from 'country-list';

export function customCodes() {
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
      code: 'TZ',
      name: 'Tanzania'
    },  
    {
      code: 'RE',
      name: 'Reunion',
    },
    {
      code: 'TF',
      name: 'French Southern and Antarctic Lands',
    },
    {
      code: 'FK',
      name: 'Falkland Islands',
    },
    {
      code: 'GS',
      name: 'South Georgia and South Sandwich Islands',
    },
  ]);
}
