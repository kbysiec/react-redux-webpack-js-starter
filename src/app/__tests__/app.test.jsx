import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import store from '../../store';

jest.mock('../../store', () => ({
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(),
}));

describe('app / App', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App store={store} />);
  });

  test('should render', () => {
    expect(component.length).toEqual(1);
  });

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
