import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { GLOBAL_TOTAL, GLOBAL_TOTAL_2 } from '../../utils/url/url';
import { worldWideCases2Slice, worldWideCasesSlice } from '../slice/world-wide-slice';

export const { updateCases: updateCasesActionCreator } = worldWideCasesSlice.actions;
export const { updateCases: updateCase2ActionCreator } = worldWideCases2Slice.actions;

export const Actions = worldWideCasesSlice.actions;
export const Actions2 = worldWideCases2Slice.actions;

export const fetchWorldWideCaseApi = () => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await axios(GLOBAL_TOTAL);
      if (response.status !== 200) {
        const data: string | null = await AsyncStorage.getItem('worldWideCases');
        const asyncStorageData = await (data !== null && JSON.parse(data));
        return await dispatch(updateCasesActionCreator(asyncStorageData));
      }
      await dispatch(updateCasesActionCreator(response.data));
      await AsyncStorage.setItem('worldWideCases', JSON.stringify(response.data));
    } catch (err) {
      console.warn(err);
    }
  };
};

export const fetchWorldWideCaseApi2 = () => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await axios(GLOBAL_TOTAL_2);
      if (response.status !== 200) {
        const data: string | null = await AsyncStorage.getItem('worldWideCases2');
        const asyncStorageData = await (data !== null && JSON.parse(data));
        return await dispatch(updateCase2ActionCreator(asyncStorageData));
      }
      await dispatch(updateCase2ActionCreator(response.data));
      await AsyncStorage.setItem('worldWideCases2', JSON.stringify(response.data));
    } catch (err) {
      console.warn(err);
    }
  };
};
