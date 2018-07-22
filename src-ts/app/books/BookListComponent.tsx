import React from 'react';
import BookItemComponent from './components/bookItem/BookItemComponent';
import { Book } from './_duck/types';
import './bookList.scss';

export interface BookListComponentProps {
  isLoading: boolean;
  books: Book[];
  error: Error | null;
  getData(): void;
}

class BookListComponent extends React.Component<BookListComponentProps> {
  componentDidMount() {
    this.props.getData();
  }

  renderBookItems() {
    return this.props.books.map((book: Book) => {
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

export default BookListComponent;
