import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Search } from '../stores/types';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {} as Search,
  reducers: {
    search: (state, action: PayloadAction<Search>) => {
      const { payload } = action;
      state = payload;
      return state;
    },
  },
});
