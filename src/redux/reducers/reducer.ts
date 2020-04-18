import { combineReducers } from '@reduxjs/toolkit';
import { allCountriesInfoSlice } from '../slice/all-countries-info';
import { searchSlice } from '../slice/search-slice';
import {
  specificCountryInfoSlice,
  specificCountryInfoWithProvincesSlice,
  specificProvinceSlice,
} from '../slice/specific-country-slice';
import {
  continentsSlice,
  worldWideCases2Slice,
  worldWideCasesSlice,
} from '../slice/world-wide-slice';

export const reducer = combineReducers({
  worldWideCases: worldWideCasesSlice.reducer,
  worldWideCases2: worldWideCases2Slice.reducer,
  allCountriesInfo: allCountriesInfoSlice.reducer,
  specificCountryInfo: specificCountryInfoSlice.reducer,
  specificCountryInfoWithProvinces: specificCountryInfoWithProvincesSlice.reducer,
  specificProvince: specificProvinceSlice.reducer,
  search: searchSlice.reducer,
  continents: continentsSlice.reducer,
});
