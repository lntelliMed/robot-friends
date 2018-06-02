import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBox from '../components/SearchBox';
import RobotList from '../components/RobotList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import * as actions from '../store/actions';

class HomePage extends Component {

  componentDidMount () {
    this.props.onInitRobots();
  }

  render () {
    const { robots, searchField, onSearchFieldChange, isPending, error } = this.props;
    let robotList = '';

    if (isPending) {
      robotList = <h2>Loading robots! Please wait...</h2>;
    } else if (error) {
      robotList = <h2>Something went wrong!</h2>;
    }

    if (robots.length) {
      const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      });
      robotList = <RobotList robots={filteredRobots} />;
    }

    return (
      <div className="tc">
        <h1 className="f1" >RoboFriends</h1>
        <SearchBox searchChangeHandler={onSearchFieldChange} />
        <Scroll>
          <ErrorBoundary>
            {robotList}
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    robots: state.generateRobots.robots,
    isPending: state.generateRobots.isPending,
    error: state.generateRobots.error,
    searchField: state.searchRobots.searchField
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onInitRobots: () => dispatch(actions.initRobots()),
    onSearchFieldChange: (event) => dispatch(actions.setSearchField(event.target.value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
