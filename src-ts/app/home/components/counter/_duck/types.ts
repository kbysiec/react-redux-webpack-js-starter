// import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
// import { Action } from 'redux';
// const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

// export default {
//   INCREMENT_COUNTER,
// };

export interface CounterState {
  readonly value: number;
}

export enum CounterTypes {
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
}

type IncrementCounterActionType = {
  type: CounterTypes.INCREMENT_COUNTER;
};

// type CounterThunkResult<Result, ActionType extends Action> = ThunkAction<
//   Result,
//   CounterState,
//   undefined,
//   ActionType
// >;

export type CounterThunkDispatch = ThunkDispatch<
  CounterState,
  undefined,
  IncrementCounterActionType
>;
