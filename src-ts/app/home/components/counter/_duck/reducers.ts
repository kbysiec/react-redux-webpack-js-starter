import { Reducer } from 'redux';
import { CounterTypes, CounterState } from './types';

const INITIAL_STATE: CounterState = {
  value: 0,
};

const counterReducer: Reducer<CounterState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case CounterTypes.INCREMENT_COUNTER: {
      return {
        ...state,
        value: action.payload,
      };
    }
    default:
      return state;
  }
};

export default counterReducer;
