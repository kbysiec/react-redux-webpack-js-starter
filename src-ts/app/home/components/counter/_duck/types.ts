import { ThunkDispatch } from 'redux-thunk';

export interface CounterState {
  readonly value: number;
}

export enum CounterTypes {
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
}

type CounterActionType = {
  type: CounterTypes.INCREMENT_COUNTER;
};

export type CounterThunkDispatch = ThunkDispatch<
  CounterState,
  undefined,
  CounterActionType
>;
