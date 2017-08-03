import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'
import './Book.css'

const Book = props => {
  const bookCoverStyles = {
    width: 128,
    height: 193,
    backgroundImage: `url(${props.book.imageLinks.thumbnail})`
  };

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={ bookCoverStyles }></div>
        <BookShelfChanger />
      </div>
      <div className="book-title">{ props.book.title }</div>
      <div className="book-authors">
        { props.book.authors.reduce((acc, cur) => `${acc}, ${cur}`) }
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape ({
    imageLinks: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired
  })
};

export default Book;
