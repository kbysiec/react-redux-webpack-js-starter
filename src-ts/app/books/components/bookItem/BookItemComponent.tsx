import React from 'react';
import './bookItem.scss';

export interface BookItemComponentProps {
  info: {
    title: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
    };
  };
}

const BookItemComponent: React.SFC<BookItemComponentProps> = ({ info }) => {
  const {
    title,
    description,
    imageLinks: { smallThumbnail },
  } = info;

  return (
    <li className="book-item">
      <div className="book-item-thumbnail">
        <img src={smallThumbnail} alt="thumbnail" />
      </div>
      <div className="book-item-details">
        <div className="book-item-title">{title}</div>
        <div className="book-item-description">{description}</div>
      </div>
      <div className="book-item-clear" />
    </li>
  );
};

export default BookItemComponent;
