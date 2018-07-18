import { CounterThunkDispatch } from './types';
import actions from './actions';

const { incrementCounter } = actions;

// type IncrementCounterActionType = {
//   type: CounterTypes.INCREMENT_COUNTER;
// };

// export type ThunkResult<R> = ThunkAction<
//   R,
//   State,
//   undefined,
//   IncrementCounterActionType
// >;

// export type CounterThunkDispatch = ThunkDispatch<
//   CounterState,
//   undefined,
//   IncrementCounterActionType
// >;

const increment = (value: number): CounterThunkDispatch => (
  dispatch: CounterThunkDispatch,
) => {
  dispatch(incrementCounter(value));
};

export default {
  incrementCounter: increment,
};
