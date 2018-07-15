import { connect } from 'react-redux';
import CounterComponent from './CounterComponent';
import { counterOperations } from './_duck';

export const mapStateToProps = state => state.counter;
// export const mapStateToProps = state => ({
//   counter: state.counter,
// });

export const mapDispatchToProps = dispatch => ({
  incrementCounter: value =>
    dispatch(counterOperations.incrementCounter(value)),
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterComponent);

export default CounterContainer;
