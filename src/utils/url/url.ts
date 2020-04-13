export const BASE_URL: string = `https://corona.lmao.ninja`;

export const GLOBAL_TOTAL: string = `${BASE_URL}/all`;
export const GLOBAL_TOTAL_2: string = `${BASE_URL}/v2/jhucsse`;
export const COUNTRIES: string = `${BASE_URL}/countries`;
export const HISTORICAL: string = `${BASE_URL}/v2/historical`;

export type Sort =
  | 'cases'
  | 'todayCases'
  | 'deaths'
  | 'todayDeaths'
  | 'recovered'
  | 'active'
  | 'critical'
  | 'casesPerOneMillion'
  | 'deathsPerOneMillion';

export const getDataForAllCountries: (sort: Sort) => string = (sort: Sort) => {
  return `${COUNTRIES}?sort=${sort}`;
};

export const getDataForSpecificCountry: (nameOfCountry: string) => string = (
  nameOfCountry: string
) => {
  return `${COUNTRIES}/${nameOfCountry}`;
};

export const getDataForSpecificCountryIncludingProvinces = (
  nameOfTheCountry: string,
  numberOfLastDays: number = 1
): string => {
  return `${HISTORICAL}/${nameOfTheCountry}?lastdays=${numberOfLastDays}`;
};

export const getDataForSpecificProvinces = (
  nameOfTheCountry: string,
  nameOfProvince: string,
  numberOfLastDays: number = 1
): string => {
  return `${HISTORICAL}/${nameOfTheCountry}/${nameOfProvince}?lastdays=${numberOfLastDays}`;
};
