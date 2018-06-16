import generateRobotsReducer from "./generateRobots";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  robots: [],
  isPending: false,
  error: null
};

describe("generateRobotsReducer", () => {
  it("should return the initial state", () => {
    expect(generateRobotsReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_ROBOTS_PENDING action", () => {
    expect(
      generateRobotsReducer(initialState, {
        type: actionTypes.FETCH_ROBOTS_PENDING
      })
    ).toEqual({
      robots: [],
      isPending: true,
      error: null
    });
  });

  it("should handle FETCH_ROBOTS_SUCCESS action", () => {
    expect(
      generateRobotsReducer(initialState, {
        type: actionTypes.FETCH_ROBOTS_SUCCESS,
        robots: [
          {
            id: "123",
            name: "test",
            email: "test@test.com"
          }
        ]
      })
    ).toEqual({
      robots: [
        {
          id: "123",
          name: "test",
          email: "test@test.com"
        }
      ],
      isPending: false,
      error: null
    });
  });

  it("should handle FETCH_ROBOTS_FAILED action", () => {
    expect(
      generateRobotsReducer(initialState, {
        type: actionTypes.FETCH_ROBOTS_FAILED,
        error: "some error"
      })
    ).toEqual({
      robots: [],
      isPending: false,
      error: "some error"
    });
  });
});
