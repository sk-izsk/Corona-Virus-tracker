import { searchSlice } from '../slice/search-slice';
import { Search } from '../stores/types';

export const { search: searchActionCreator } = searchSlice.actions;

export const SearchActions = searchSlice.actions;

export const getSearchState = (value: Search) => {
  return async (dispatch: any, getState: any) => {
    try {
      await dispatch(searchActionCreator(value));
    } catch (err) {
      console.warn(err);
    }
  };
};
