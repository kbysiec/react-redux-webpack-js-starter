import { connect } from 'react-redux';
import CounterComponent from './CounterComponent';
import { counterOperations, CounterThunkDispatch } from './_duck';
import { ApplicationState } from '../../../_duck';
interface PropsFromState {
  counter: number;
}

interface PropsFromDispatch {
  incrementCounter(value: number): void;
}

// export const mapStateToProps = (state: counterState) => state.counter;
export const mapStateToProps = (state: ApplicationState) => ({
  counter: state.counter.value,
});

export const mapDispatchToProps = (dispatch: CounterThunkDispatch) => ({
  incrementCounter: (value: number) => {
    dispatch(counterOperations.incrementCounter(value));
  },
});

const CounterContainer = connect<PropsFromState, PropsFromDispatch>(
  mapStateToProps,
  mapDispatchToProps,
)(CounterComponent);

export default CounterContainer;
