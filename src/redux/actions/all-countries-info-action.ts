import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { getDataForAllCountries, Sort } from '../../utils';
import { allCountriesInfoSlice } from '../slice/all-countries-info';

export const { updateCases: allCountriesInfoActionCreator } = allCountriesInfoSlice.actions;

export const AllCountriesActions = allCountriesInfoSlice.actions;

export const fetchAllCountriesApi = (sort: Sort) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await axios(getDataForAllCountries(sort));
      if (response.status !== 200) {
        const data: string | null = await AsyncStorage.getItem('allCountriesInfo');
        const asyncStorageData = await (data !== null && JSON.parse(data));
        return await dispatch(allCountriesInfoActionCreator(asyncStorageData));
      }
      await dispatch(allCountriesInfoActionCreator(response.data));
      await AsyncStorage.setItem('allCountriesInfo', JSON.stringify(response.data));
    } catch (err) {
      console.warn(err);
    }
  };
};
