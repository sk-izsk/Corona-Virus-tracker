import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Continent, WorldWideCases, WorldWiseCases2 } from '../stores/types';

export const worldWideCasesSlice = createSlice({
  name: 'worldWideCases',
  initialState: {} as WorldWideCases | {},
  reducers: {
    updateCases: (state, action: PayloadAction<WorldWideCases>) => {
      const { payload } = action;
      state = payload;
      return state;
    },
  },
});
export const worldWideCases2Slice = createSlice({
  name: 'worldWideCases2',
  initialState: [] as WorldWiseCases2[] | [] | any,
  reducers: {
    updateCases: (state, action: PayloadAction<WorldWiseCases2>) => {
      const { payload } = action;
      state = payload;
      return state;
    },
  },
});

export const continentsSlice = createSlice({
  name: 'continents',
  initialState: [] as Continent[] | [] | any,
  reducers: {
    updateCases: (state, action: PayloadAction<WorldWiseCases2>) => {
      const { payload } = action;
      state = payload;
      return state;
    },
  },
});
