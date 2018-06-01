import * as actionTypes from '../actions/actionTypes';

const initialState = {
  robots: [],
  searchField: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ROBOTS:
      return {
        ...state,
        robots: action.robots
      };
    case actionTypes.SET_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.searchField
      };
    default:
      return state;
  }
};

export default reducer;
