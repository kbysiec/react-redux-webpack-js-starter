import React from 'react';
import PropTypes from 'prop-types';
import './counter.scss';

class CounterComponent extends React.Component {
  componentDidMount() {
    const { incrementCounter } = this.props;
    const incrementCounterValue = () => {
      const { counter } = this.props;
      incrementCounter(counter + 1);
    };

    this.counterInterval = setInterval(incrementCounterValue, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.counterInterval);
  }

  render() {
    const { counter } = this.props;
    return <div className="counter">value: {counter}</div>;
  }
}

CounterComponent.propTypes = {
  counter: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
};

export default CounterComponent;
