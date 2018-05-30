import * as actionTypes from './actionTypes';
import { robots } from '../../data/robots';


export const fetchRobots = () => {
  return {
    type: actionTypes.FETCH_ROBOTS,
    robots
  }
};
