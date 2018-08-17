import React from 'react';
import PropTypes from 'prop-types';
import BookItemComponent from './components/bookItem/BookItemComponent';
import './bookList.scss';

class BookListComponent extends React.Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  renderBookItems() {
    const { books } = this.props;
    return books.map(book => {
      const { id, volumeInfo } = book;
      return <BookItemComponent info={volumeInfo} key={id} />;
    });
  }

  render() {
    const { isLoading } = this.props;
    if (isLoading) {
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
