import {
  combineReducers,
  configureStore,
  createSlice,
  getDefaultMiddleware,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import logger from 'redux-logger';
import { GLOBAL_TOTAL } from '../../utils/url/url';
import { WorldWideCases } from '../stores/types';

const worldWideCasesSlice = createSlice({
  name: 'worldWideCases',
  initialState: null as WorldWideCases | null,
  reducers: {
    updateCases: (state, action: PayloadAction<WorldWideCases>) => {
      const { payload } = action;
      state = payload;
      return state;
    },
  },
});

export const { updateCases: updateCasesActionCreator } = worldWideCasesSlice.actions;

export const Actions = worldWideCasesSlice.actions;

const reducer = combineReducers({ worldWideCases: worldWideCasesSlice.reducer });

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
  logger,
];

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const fetchApiThunk = () => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await axios(GLOBAL_TOTAL);
      console.log('this is my response data', response.data);
      await dispatch(worldWideCasesSlice.actions.updateCases(response.data));
    } catch (e) {
      console.warn(e);
    }
  };
};

export default store;
