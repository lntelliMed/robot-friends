import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card';
import * as actions from '../store/actions';

class CardList extends Component {
  state = {
    robots: []
  }

  componentDidMount () {
    this.props.onInitRobots();
  }

  render () {
    let robotList = <p>Loading robots! Please wait...</p>
    if (this.props.robots.length) {
      robotList = this.props.robots.map((robot, index) => {
                  return (
                    <Card
                      key={this.props.robots[index].id}
                      id={this.props.robots[index].id}
                      name={this.props.robots[index].name}
                      email={this.props.robots[index].email} />
                  )
                });
    }

    return (
      <div>
        {robotList}
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

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
