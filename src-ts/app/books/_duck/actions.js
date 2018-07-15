import types from './types';

const getDataRequested = () => ({
  type: types.GET_DATA_REQUESTED,
});

const getDataDone = data => ({
  type: types.GET_DATA_DONE,
  payload: data,
});

const getDataFailed = error => ({
  type: types.GET_DATA_FAILED,
  payload: error,
});

export default {
  getDataRequested,
  getDataDone,
  getDataFailed,
};
