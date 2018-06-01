import axios from 'axios';

import * as actionTypes from './actionTypes';

export const fetchRobots = (robots) => {
  return {
    type: actionTypes.FETCH_ROBOTS,
    robots
  }
};

export const initRobots = () => {
  return dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => response.data)
      .then(robots => dispatch(fetchRobots(robots)))
      .catch(err => console.error("Something went wront! " + err.message));
  }
};

export const setSearchField = (searchField) => {
  return {
    type: actionTypes.SET_SEARCH_FIELD,
    searchField
  }
};
