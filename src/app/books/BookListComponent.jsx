import React from 'react';
import PropTypes from 'prop-types';
import BookItemComponent from './components/bookItem/BookItemComponent';
import './bookList.scss';

class BookListComponent extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  renderBookItems() {
    return this.props.books.map(book => {
      const { id, volumeInfo } = book;
      return <BookItemComponent info={volumeInfo} key={id} />;
    });
  }

  render() {
    if (this.props.isLoading) {
      return (
        <>
          <h1>Books</h1>
          <div className="book-loader">Data is loading...</div>
          <div className="book-loader-spinner" />
        </>
      );
    }
    return (
      <>
        <h1>Books</h1>
        <ul className="book-list">{this.renderBookItems()}</ul>
      </>
    );
  }
}

BookListComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  getData: PropTypes.func.isRequired,
};

export default BookListComponent;
