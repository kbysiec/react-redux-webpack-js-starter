import React from 'react';
import { shallow } from 'enzyme';
import HeaderComponent from '../HeaderComponent';

describe('common / header / HeaderComponent', () => {
  let component;

  beforeEach(() => {
    component = shallow(<HeaderComponent />);
  });

  test('should render', () => {
    expect(component.length).toEqual(1);
  });

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  test('should contains elements with "header" and "header-logo" class', () => {
    expect(component.find('div.header').length).toEqual(1);
    expect(component.find('img.header-logo').length).toEqual(1);
  });
});
