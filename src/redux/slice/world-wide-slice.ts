import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WorldWideCases } from '../stores/types';

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
