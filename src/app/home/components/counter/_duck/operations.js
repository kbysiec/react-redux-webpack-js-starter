import actions from './actions';

const { incrementCounter } = actions;

const increment = value => dispatch => {
  dispatch(incrementCounter(value));
};

export default {
  incrementCounter: increment,
};
