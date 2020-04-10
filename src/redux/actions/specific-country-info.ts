import axios from 'axios';
import { AsyncStorage } from 'react-native';
import {
  getDataForSpecificCountry,
  getDataForSpecificCountryIncludingProvinces,
  getDataForSpecificProvinces,
} from '../../utils';
import {
  specificCountryInfoSlice,
  specificCountryInfoWithProvincesSlice,
  specificProvinceSlice,
} from '../slice/specific-country-slice';

export const { updateCases: specificCountryInfoActionCreator } = specificCountryInfoSlice.actions;
export const {
  updateCases: specificCountryInfoWithProvincesActionCreator,
} = specificCountryInfoWithProvincesSlice.actions;

export const { updateCases: specificProvinceActionCreator } = specificProvinceSlice.actions;

export const specificCountryInfoActions = specificCountryInfoSlice.actions;
export const specificCountryInfoWithProvincesActions =
  specificCountryInfoWithProvincesSlice.actions;
export const specificProvinceActions = specificProvinceSlice.actions;

export const fetchSpecificCountryApi = (nameOfCountry: string) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await axios(getDataForSpecificCountry(nameOfCountry));
      if (response.status !== 200) {
        const data: string | null = await AsyncStorage.getItem('specificCountryInfo');
        const asyncStorageData = await (data !== null && JSON.parse(data));
        return await dispatch(specificCountryInfoActionCreator(asyncStorageData));
      }
      await dispatch(specificCountryInfoActionCreator(response.data));
      await AsyncStorage.setItem('specificCountryInfo', JSON.stringify(response.data));
    } catch (err) {
      console.warn(err);
    }
  };
};
export const fetchSpecificCountryWithProvincesApi = (
  nameOfCountry: string,
  numberOfLastDays: number = 1
) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await axios(
        getDataForSpecificCountryIncludingProvinces(nameOfCountry, numberOfLastDays)
      );
      if (response.status !== 200) {
        const data: string | null = await AsyncStorage.getItem('specificCountryInfoWithProvinces');
        const asyncStorageData = await (data !== null && JSON.parse(data));
        return await dispatch(specificCountryInfoWithProvincesActionCreator(asyncStorageData));
      }
      await dispatch(specificCountryInfoWithProvincesActionCreator(response.data));
      await AsyncStorage.setItem('specificCountryInfoWithProvinces', JSON.stringify(response.data));
    } catch (err) {
      console.warn(err);
    }
  };
};

export const fetchSpecificProvinceApi = (
  nameOfCountry: string,
  nameOfProvince: string,
  numberOfLastDays: number = 1
) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await axios(
        getDataForSpecificProvinces(nameOfCountry, nameOfProvince, numberOfLastDays)
      );
      if (response.status !== 200) {
        const data: string | null = await AsyncStorage.getItem('specificProvince');
        const asyncStorageData = await (data !== null && JSON.parse(data));
        return await dispatch(specificProvinceActionCreator(asyncStorageData));
      }
      await dispatch(specificProvinceActionCreator(response.data));
      await AsyncStorage.setItem('specificProvince', JSON.stringify(response.data));
    } catch (err) {
      console.warn(err);
    }
  };
};
