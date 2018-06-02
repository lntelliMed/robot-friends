import axios from 'axios';

import * as actionTypes from './actionTypes';

export const fetchRobotsSuccess = (robots) => {
  return {
    type: actionTypes.FETCH_ROBOTS_SUCCESS,
    robots
  }
};

export const fetchRobotsPending = () => {
  return {
    type: actionTypes.FETCH_ROBOTS_PENDING
  }
};

export const fetchRobotsFailed = (error) => {
  return {
    type: actionTypes.FETCH_ROBOTS_FAILED,
    error
  }
};

export const initRobots = () => {
  return dispatch => {
    dispatch(fetchRobotsPending());
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => response.data)
      .then(robots => dispatch(fetchRobotsSuccess(robots)))
      .catch(err => dispatch(fetchRobotsFailed(err)));
  }
};
