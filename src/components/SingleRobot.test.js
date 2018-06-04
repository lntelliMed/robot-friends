import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SingleRobot from './SingleRobot';

it('expect to render Card component', () => {
  // expect(shallow(<SingleRobot />).length).toEqual(1);
  expect(shallow(<SingleRobot />).length).toMatchSnapshot();
});
