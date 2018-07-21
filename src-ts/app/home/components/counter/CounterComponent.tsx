import React from 'react';
import './counter.scss';

export interface CounterComponentProps {
  counter: number;
  incrementCounter(value: number): void;
}

class CounterComponent extends React.Component<CounterComponentProps> {
  counterInterval: NodeJS.Timer;

  componentDidMount() {
    const incrementCounter = () => {
      this.props.incrementCounter(this.props.counter + 1);
    };

    this.counterInterval = setInterval(incrementCounter, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.counterInterval);
  }

  render() {
    return <div className="counter">value: {this.props.counter}</div>;
  }
}

export default CounterComponent;
