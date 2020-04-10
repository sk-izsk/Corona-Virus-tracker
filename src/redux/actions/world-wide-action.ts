import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { GLOBAL_TOTAL } from '../../utils/url/url';
import { worldWideCasesSlice } from '../slice/world-wide-slice';

export const { updateCases: updateCasesActionCreator } = worldWideCasesSlice.actions;

export const Actions = worldWideCasesSlice.actions;

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
