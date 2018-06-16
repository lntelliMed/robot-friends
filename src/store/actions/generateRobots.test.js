import * as actions from "./generateRobots";
import * as actionTypes from "./actionTypes";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

describe("Fetch robots action PENDING", () => {
  it("should create a Pending action on fetch Robots", () => {
    const store = mockStore();
    store.dispatch(actions.fetchRobotsPending());
    const action = store.getActions();
    expect(action[0]).toEqual({ type: actionTypes.FETCH_ROBOTS_PENDING });
  });
});
