import React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import CounterComponent, { CounterComponentProps } from '../CounterComponent';

describe('home / counter / CounterComponent', () => {
  let component: ShallowWrapper | ReactWrapper;
  let props: CounterComponentProps;

  beforeEach(() => {
    props = {
      counter: 0,
      incrementCounter: jest.fn(),
    };
  });

  test('should render', () => {
    component = shallow(<CounterComponent {...props} />);
    expect(component.length).toEqual(1);
  });

  test('should contains element with div with "counter" class', () => {
    component = shallow(<CounterComponent {...props} />);
    expect(component.find('div.counter').length).toEqual(1);
  });

  test('should rendered element contains "value: 0" text', () => {
    component = shallow(<CounterComponent {...props} />);
    expect(component.text()).toEqual('value: 0');
  });

  test('should componentDidMount be called', () => {
    const componentDidMountSpy = jest.spyOn(
      CounterComponent.prototype,
      'componentDidMount',
    );
    component = mount(<CounterComponent {...props} />);
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    componentDidMountSpy.mockClear();
    jest.clearAllTimers();
  });

  test('should setInterval in componentDidMount be called', () => {
    jest.useFakeTimers();
    component = mount(<CounterComponent {...props} />);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    jest.clearAllTimers();
  });

  test('should incrementCounter prop function be called after 1000ms', () => {
    jest.useFakeTimers();
    component = mount(<CounterComponent {...props} />);
    expect(component.prop('incrementCounter')).not.toBeCalled();
    jest.advanceTimersByTime(1000);
    expect(component.prop('incrementCounter')).toHaveBeenCalledTimes(1);
    jest.resetAllMocks();
    jest.clearAllTimers();
  });

  test('should incrementCounter prop function stop calling after component unmounting', () => {
    jest.useFakeTimers();
    component = mount(<CounterComponent {...props} />);
    component.unmount();
    expect(clearInterval).toHaveBeenCalledTimes(1);
    jest.resetAllMocks();
    jest.clearAllTimers();
  });

  test('should match snapshot', () => {
    component = shallow(<CounterComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
