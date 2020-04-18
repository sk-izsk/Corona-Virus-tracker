export type WorldWideCases = {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  affectedCountries: number;
};

export interface Stats {
  confirmed: number;
  deaths: number;
  recovered: number;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface WorldWiseCases2 {
  country: string;
  province: string;
  updatedAt: string;
  stats: Stats;
  coordinates: Coordinates;
}

export interface CountryInfo {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
}

export interface SpecificCountryInfo {
  updated: number;
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
}

export interface Timeline {
  cases: unknown;
  deaths: unknown;
  recovered: unknown;
}

export interface SpecificCountryWithProvinces {
  country: string;
  provinces: string[];
  timeline: Timeline;
}

export interface SpecificProvince {
  country: string;
  province: string;
  timeline: Timeline;
}

export interface Search {
  search: string;
}

export interface Continent {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  continent: string;
}
