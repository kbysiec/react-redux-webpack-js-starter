import React from 'react';
import { shallow } from 'enzyme';
import LoaderComponent from '../LoaderComponent';

describe('common / loader / LoaderComponent', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LoaderComponent />);
  });

  test('should render', () => {
    expect(component.length).toEqual(1);
  });

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  test('should contains element with "loader" class', () => {
    expect(component.find('div.loader').length).toEqual(1);
    expect(component.find('div.loader-spinner').length).toEqual(1);
  });
});
