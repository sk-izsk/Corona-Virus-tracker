import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  SpecificCountryInfo,
  SpecificCountryWithProvinces,
  SpecificProvince,
} from '../stores/types';

export const specificCountryInfoSlice = createSlice({
  name: 'specificCountryInfo',
  initialState: {} as SpecificCountryInfo | {},
  reducers: {
    updateCases: (state, action: PayloadAction<SpecificCountryInfo>) => {
      const { payload } = action;
      state = payload;
      return state;
    },
  },
});

export const specificCountryInfoWithProvincesSlice = createSlice({
  name: 'specificCountryInfoWithProvinces',
  initialState: {} as SpecificCountryWithProvinces | {},
  reducers: {
    updateCases: (state, action: PayloadAction<SpecificCountryWithProvinces>) => {
      const { payload } = action;
      state = payload;
      return state;
    },
  },
});

export const specificProvinceSlice = createSlice({
  name: 'specificProvince',
  initialState: {} as SpecificProvince | {},
  reducers: {
    updateCases: (state, action: PayloadAction<SpecificProvince>) => {
      const { payload } = action;
      state = payload;
      return state;
    },
  },
});
