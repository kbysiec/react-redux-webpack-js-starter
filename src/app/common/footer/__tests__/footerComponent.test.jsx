import React from 'react';
import { shallow } from 'enzyme';
import FooterComponent from '../FooterComponent';

describe('common / footer / FooterComponent', () => {
  let component;

  beforeEach(() => {
    component = shallow(<FooterComponent />);
  });

  test('should render', () => {
    expect(component.length).toEqual(1);
  });

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  test('should contains elements with "footer" and "footer-link" class', () => {
    expect(component.find('div.footer').length).toEqual(1);
    expect(component.find('a.footer-link').length).toEqual(1);
  });
});
