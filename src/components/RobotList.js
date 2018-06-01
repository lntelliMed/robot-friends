import React from 'react';

import SingleRobot from '../components/SingleRobot';

const robotList = (props) => {
  let robotList = <h2>No robots found...</h2>
  if (props.robots.length) {
    robotList = props.robots.map((robot, index) => {
                return (
                  <SingleRobot
                    key={props.robots[index].id}
                    id={props.robots[index].id}
                    name={props.robots[index].name}
                    email={props.robots[index].email} />
                )
              });
  }

  return (
    <div>
      {robotList}
    </div>
  );
}


export default robotList;
