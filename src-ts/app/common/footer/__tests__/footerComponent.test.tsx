import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import FooterComponent from '../FooterComponent';

describe('common / footer / FooterComponent', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<FooterComponent />);
  });

  test('should render', () => {
    expect(component.length).toEqual(1);
  });

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  test('should contains elements with "footer" and "footer-link-logo" class', () => {
    expect(component.find('div.footer').length).toEqual(1);
    expect(component.find('img.footer-link-logo').length).toEqual(1);
  });
});
