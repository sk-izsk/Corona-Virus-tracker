import axios from 'axios';
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
      if (response.status !== 200) return;
      await dispatch(specificCountryInfoActionCreator(response.data));
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
      if (response.status !== 200) return;
      await dispatch(specificCountryInfoActionCreator(response.data));
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
      if (response.status !== 200) return;
      await dispatch(specificCountryInfoActionCreator(response.data));
    } catch (err) {
      console.warn(err);
    }
  };
};
