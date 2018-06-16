import React, { Component } from "react";

import SearchBox from "./SearchBox";
import RobotList from "./RobotList";
import Header from "./Header";
import Scroll from "./Scroll";
import ErrorBoundary from "./ErrorBoundary";

class MainPage extends Component {
  componentDidMount() {
    this.props.onInitRobots();
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  render() {
    const {
      robots,
      searchField,
      onSearchFieldChange,
      isPending,
      error
    } = this.props;
    let robotList = "";

    if (isPending) {
      robotList = <h2>Loading robots! Please wait...</h2>;
    } else if (error) {
      robotList = <h2>Something went wrong!</h2>;
    }

    if (robots.length) {
      const filteredRobots = this.filterRobots(robots, searchField);
      robotList = <RobotList robots={filteredRobots} />;
    }

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChangeHandler={onSearchFieldChange} />
        <Scroll>
          <ErrorBoundary>{robotList}</ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
