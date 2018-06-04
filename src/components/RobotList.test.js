import React from 'react';
import { shallow, mount, render } from 'enzyme';
import RobotList from './RobotList';

it('expect to render Card component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'johnsnow',
      email: 'john@test.com'
    }
  ];
  expect(shallow(<RobotList robots={mockRobots}/>).length).toMatchSnapshot();
});
