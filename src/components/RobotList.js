import React, { Component } from 'react';

import SingleRobot from '../components/SingleRobot';

class RobotList extends Component {
  render () {
    let robotList = <p>Loading robots! Please wait...</p>
    if (this.props.robots.length) {
      robotList = this.props.robots.map((robot, index) => {
                  return (
                    <SingleRobot
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


export default RobotList;
