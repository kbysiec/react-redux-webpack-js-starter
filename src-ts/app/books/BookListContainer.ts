import { connect } from 'react-redux';
import BookListComponent from './BookListComponent';
import { booksOperations, BooksThunkDispatch, Book } from './_duck';
import { ApplicationState } from '../_duck';

interface PropsFromState {
  isLoading: boolean;
  books: Book[];
  error: Error | null;
}

interface PropsFromDispatch {
  getData(): void;
}

export const mapStateToProps = (state: ApplicationState) => ({
  isLoading: state.books.isLoading,
  books: state.books.books,
  error: state.books.error,
});

export const mapDispatchToProps = (dispatch: BooksThunkDispatch) => ({
  getData: () => dispatch(booksOperations.getData()),
});

const BookListContainer = connect<PropsFromState, PropsFromDispatch>(
  mapStateToProps,
  mapDispatchToProps,
)(BookListComponent);

export default BookListContainer;
