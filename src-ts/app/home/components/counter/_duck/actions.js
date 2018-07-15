import types from './types';

const incrementCounter = value => ({
  type: types.INCREMENT_COUNTER,
  payload: value,
});

export default {
  incrementCounter,
};
