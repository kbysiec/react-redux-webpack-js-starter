import React from 'react';
import PropTypes from 'prop-types';
import './counter.scss';

class CounterComponent extends React.Component {
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

CounterComponent.propTypes = {
  counter: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
};

export default CounterComponent;
