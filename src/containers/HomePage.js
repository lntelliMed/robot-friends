import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBox from '../components/SearchBox';
import RobotList from '../components/RobotList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import * as actions from '../store/actions';

class HomePage extends Component {
  state = {
    searchField: ''
  }

  componentDidMount () {
    this.props.onInitRobots();
  }

  searchChangeHandler = (event) => {
    this.setState({
      searchField: event.target.value
    });
  }

  render () {
    const { robots } = this.props;
    const { searchField } = this.state;
    let robotList = <h2>Loading robots! Please wait...</h2>

    if (robots.length) {
      const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      });
      robotList = <RobotList robots={filteredRobots} />;
    }

    return (
      <div className="tc">
        <h1 className="f1" >RoboFriends</h1>
        <SearchBox searchChangeHandler={this.searchChangeHandler} />
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
    robots: state.robotGenerator.robots
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onInitRobots: () => dispatch(actions.initRobots())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
