import React from 'react';
import { shallow } from 'enzyme';
import { Achievements } from './Achievements';

describe('Component Achievements', () => {
  it('should render without crashing', () => {
    const component = shallow(<Achievements />);
    expect(component).toBeTruthy();
  });
});
