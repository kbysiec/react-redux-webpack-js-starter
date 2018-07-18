import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import HomeComponent from '../HomeComponent';

describe('home / HomeComponent', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<HomeComponent />);
  });

  test('should render', () => {
    expect(component.length).toEqual(1);
  });

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  test('should contains h1 element', () => {
    expect(component.find('h1').length).toEqual(1);
  });
});
