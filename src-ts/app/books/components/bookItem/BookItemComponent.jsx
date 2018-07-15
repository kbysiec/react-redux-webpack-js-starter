import React from 'react';
import PropTypes from 'prop-types';
import './bookItem.scss';

const BookItemComponent = ({ info }) => {
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

BookItemComponent.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default BookItemComponent;
