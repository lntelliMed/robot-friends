import React, { Component } from "react";
import { connect } from "react-redux";

import MainPage from "../components/MainPage";

import * as actions from "../store/actions";

class HomePage extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    robots: state.generateRobots.robots,
    isPending: state.generateRobots.isPending,
    error: state.generateRobots.error,
    searchField: state.searchRobots.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitRobots: () => dispatch(actions.initRobots()),
    onSearchFieldChange: event =>
      dispatch(actions.setSearchField(event.target.value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
