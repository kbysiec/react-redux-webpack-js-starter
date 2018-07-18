import { CounterTypes } from './types';

const incrementCounter = (value: number) => ({
  type: CounterTypes[CounterTypes.INCREMENT_COUNTER],
  payload: value,
});

export default {
  incrementCounter,
};
