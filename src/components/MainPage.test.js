import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onInitRobots: jest.fn(),
    onSearchFieldChange: jest.fn(),
    robots: [],
    isPending: false,
    error: null,
    searchField: ""
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

it("MainPage renders without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("works correctly even if Robots is initially an empty array", () => {
  const mockProps = {
    onInitRobots: jest.fn(),
    onSearchFieldChange: jest.fn(),
    robots: [],
    isPending: false,
    error: null,
    searchField: "a"
  };

  wrapper = shallow(<MainPage {...mockProps} />);
  expect(
    wrapper.instance().filterRobots(mockProps.robots, mockProps.searchField)
  ).toEqual([]);
});

it("filters Robots correctly whenever a match is found", () => {
  const filteredRobots = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    }
  ];

  const mockProps = {
    onInitRobots: jest.fn(),
    onSearchFieldChange: jest.fn(),
    robots: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      }
    ],
    isPending: false,
    error: null,
    searchField: "Leanne"
  };

  wrapper = shallow(<MainPage {...mockProps} />);
  expect(
    wrapper.instance().filterRobots(mockProps.robots, mockProps.searchField)
  ).toEqual(filteredRobots);
});

it("works correctly even if no match is found", () => {
  const filteredRobots = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    }
  ];

  const mockProps = {
    onInitRobots: jest.fn(),
    onSearchFieldChange: jest.fn(),
    robots: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      }
    ],
    isPending: false,
    error: null,
    searchField: "Xavier"
  };

  wrapper = shallow(<MainPage {...mockProps} />);
  expect(
    wrapper.instance().filterRobots(mockProps.robots, mockProps.searchField)
  ).toEqual([]);
});
