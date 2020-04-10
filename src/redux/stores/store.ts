import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducer } from '../reducers/reducer';
import {
  SpecificCountryInfo,
  SpecificCountryWithProvinces,
  SpecificProvince,
  WorldWideCases,
} from './types';

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export interface Store {
  worldWideCases: WorldWideCases;
  allCountriesInfo: SpecificCountryInfo[];
  specificCountryInfo: SpecificCountryInfo;
  specificCountryInfoWithProvinces: SpecificCountryWithProvinces;
  specificProvince: SpecificProvince;
}

export default store;
