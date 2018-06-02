import * as actionTypes from '../actions/actionTypes';

const initialState = {
  robots: [],
  isPending: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: action.robots,
        isPending: false,
      };
    case actionTypes.FETCH_ROBOTS_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case actionTypes.FETCH_ROBOTS_FAILED:
      return {
        ...state,
        isPending: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
