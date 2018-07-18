import { CounterThunkDispatch } from './types';
import actions from './actions';

const { incrementCounter } = actions;

const increment = (value: number): CounterThunkDispatch => (
  dispatch: CounterThunkDispatch,
) => {
  dispatch(incrementCounter(value));
};

export default {
  incrementCounter: increment,
};
