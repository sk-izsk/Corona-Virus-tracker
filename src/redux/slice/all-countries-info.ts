import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SpecificCountryInfo } from '../stores/types';

export const allCountriesInfoSlice = createSlice({
  name: 'allCountriesInfo',
  initialState: [] as SpecificCountryInfo[] | [],
  reducers: {
    updateCases: (state, action: PayloadAction<SpecificCountryInfo[]>) => {
      const { payload } = action;
      state = payload;
      return state;
    },
  },
});
