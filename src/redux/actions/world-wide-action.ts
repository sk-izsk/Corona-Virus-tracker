import axios from 'axios';
import { GLOBAL_TOTAL } from '../../utils/url/url';
import { worldWideCasesSlice } from '../slice/world-wide-slice';

export const { updateCases: updateCasesActionCreator } = worldWideCasesSlice.actions;

export const Actions = worldWideCasesSlice.actions;

export const fetchWorldWideCaseApi = () => {
  return async (dispatch: any, getState: any) => {
    try {
      const response = await axios(GLOBAL_TOTAL);
      if (response.status !== 200) return;
      await dispatch(updateCasesActionCreator(response.data));
    } catch (err) {
      console.warn(err);
    }
  };
};
