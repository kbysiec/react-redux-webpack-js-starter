import React from 'react';
import { shallow } from 'enzyme';
import NavbarComponent from '../NavbarComponent';

describe('common / navbar / NavbarComponent', () => {
  let component;

  beforeEach(() => {
    component = shallow(<NavbarComponent />);
  });

  test('should render', () => {
    expect(component.length).toEqual(1);
  });

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  test('should contains elements with "navbar" and "navbar-item" class', () => {
    expect(component.find('ul.navbar').length).toEqual(1);
    expect(component.find('li.navbar-item').length).toEqual(2);
  });
});
