import { connect } from 'react-redux';
import BookListComponent from './BookListComponent';
import { quotesOperations } from './_duck';

export const mapStateToProps = state => ({
  isLoading: state.books.isLoading,
  books: state.books.books,
  error: state.books.error,
});

export const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(quotesOperations.getData()),
});

const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookListComponent);

export default BookListContainer;
