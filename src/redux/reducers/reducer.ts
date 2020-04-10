import { combineReducers } from '@reduxjs/toolkit';
import { allCountriesInfoSlice } from '../slice/all-countries-info';
import {
  specificCountryInfoSlice,
  specificCountryInfoWithProvincesSlice,
  specificProvinceSlice,
} from '../slice/specific-country-slice';
import { worldWideCasesSlice } from '../slice/world-wide-slice';

export const reducer = combineReducers({
  worldWideCases: worldWideCasesSlice.reducer,
  allCountriesInfo: allCountriesInfoSlice.reducer,
  specificCountryInfo: specificCountryInfoSlice.reducer,
  specificCountryInfoWithProvinces: specificCountryInfoWithProvincesSlice.reducer,
  specificProvince: specificProvinceSlice.reducer,
});
