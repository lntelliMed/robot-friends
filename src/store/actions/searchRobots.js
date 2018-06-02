import * as actionTypes from './actionTypes';

export const setSearchField = (searchField) => {
  return {
    type: actionTypes.SET_SEARCH_FIELD,
    searchField
  }
};
