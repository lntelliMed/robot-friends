import * as actionTypes from '../actions/actionTypes';

const initialState = {
  robots: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ROBOTS:
      return {
        ...state,
        robots: action.robots
      };
    default:
      return state;
  }
};

export default reducer;
