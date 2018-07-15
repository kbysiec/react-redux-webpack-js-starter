import axios from 'axios';
import actions from './actions';

const { getDataRequested, getDataDone, getDataFailed } = actions;

const getData = () => dispatch => {
  dispatch(getDataRequested());

  return (
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=animals')
      // .then(response => response.json())
      .then(({ data }) => {
        dispatch(getDataDone(data.items));
      })
      .catch(error => {
        dispatch(getDataFailed(error));
      })
  );
};

export default {
  getData,
};
