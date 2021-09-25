import React from 'react';
import { shallow } from 'enzyme';
import { {{pascalCase name}} } from './{{pascalCase name}}';

describe('Component {{pascalCase name}}', () => {
  it('should render without crashing', () => {
    const component = shallow(<{{pascalCase name}} />);
    expect(component).toBeTruthy();
  });
});
