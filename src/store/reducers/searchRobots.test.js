import searchRobotsReducer from "./searchRobots";
import * as actionTypes from "../actions/actionTypes";

const initialStateSearch = {
  searchField: ""
};

describe("searchRobots reducer", () => {
  it("should return the initial state", () => {
    expect(searchRobotsReducer(undefined, {})).toEqual({
      searchField: ""
    });
  });

  it("should handle SET_SEARCH_FIELD", () => {
    expect(
      searchRobotsReducer(initialStateSearch, {
        type: actionTypes.SET_SEARCH_FIELD,
        searchField: "abc"
      })
    ).toEqual({
      searchField: "abc"
    });
  });
});
