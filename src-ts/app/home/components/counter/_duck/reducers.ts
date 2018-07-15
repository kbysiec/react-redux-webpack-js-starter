import types from './types';

const INITIAL_STATE = {
  counter: 0,
};

const counterReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER: {
      return {
        ...state,
        counter: action.payload,
      };
    }
    default:
      return state;
  }
};

export default counterReducer;
