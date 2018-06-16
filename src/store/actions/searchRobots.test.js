import * as actions from "./searchRobots";
import * as actionTypes from "./actionTypes";

describe("Set search field action", () => {
  it("should create an action to search", () => {
    const enteredText = "test text";
    const expectedAction = {
      type: actionTypes.SET_SEARCH_FIELD,
      searchField: enteredText
    };
    expect(actions.setSearchField(enteredText)).toEqual(expectedAction);
  });
});
