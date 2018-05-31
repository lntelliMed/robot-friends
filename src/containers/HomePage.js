import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBox from '../components/SearchBox';
import RobotList from '../components/RobotList';
import * as actions from '../store/actions';

class HomePage extends Component {
  state = {
    searchField: ''
  }

  componentDidMount () {
    this.props.onInitRobots();
  }

  searchChangeHandler = (event) => {
    console.log(event.target.value)
    this.setState({
      searchField: event.target.value
    });
  }

  render () {
    const filteredRobots = this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    console.log(filteredRobots)
    console.log(this.state.robots)
    return (
      <div className="tc">
        <h1 className="f1" >RoboFriends</h1>
        <SearchBox searchChangeHandler={this.searchChangeHandler} />
        <RobotList robots={filteredRobots}/>
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
    onInitRobots: () => dispatch(actions.fetchRobots())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
