import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';
import './Book.css';

const Book = props => {
  const { book :
            {
              imageLinks : { thumbnail } = {},
              title = 'Unknown Title',
              authors = ['Unknown Author']
            } = {}
        } = props;

  const bookCoverStyles = {
    width: 128,
    height: 193,
    backgroundImage: `url(${thumbnail})`
  };

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={ bookCoverStyles }></div>
        <BookShelfChanger />
      </div>
      <div className="book-title">{ title }</div>
      <div className="book-authors">
        { authors.reduce((acc, cur) => `${acc}, ${cur}`) }
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape ({
    imageLinks: PropTypes.object,
    title: PropTypes.string,
    authors: PropTypes.array
  })
};

export default Book;
