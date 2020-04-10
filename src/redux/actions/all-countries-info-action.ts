import axios from 'axios';
import { getDataForAllCountries } from '../../utils';
import { Sort } from '../../utils/url/url';
import { allCountriesInfoSlice } from '../slice/all-countries-info';

export const { updateCases: allCountriesInfoActionCreator } = allCountriesInfoSlice.actions;

export const AllCountriesActions = allCountriesInfoSlice.actions;

export const fetchAllCountriesApi = (sort: Sort) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await axios(getDataForAllCountries(sort));
      if (response.status !== 200) return;
      await dispatch(allCountriesInfoActionCreator(response.data));
    } catch (err) {
      console.warn(err);
    }
  };
};
