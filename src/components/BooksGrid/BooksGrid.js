import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';
import './BooksGrid.css';

const BooksGrid = props => {
  const updateShelvedBooksList = () => {
    props.updateShelvedBooksList
      && props.updateShelvedBooksList();
  };

  return(
    <ol className="books-grid">
    {
        props.books.map( book => (
          <li key={ book.id }>
            <Book
              book={ book }
              updateShelvedBooksList={ updateShelvedBooksList }
            />
          </li>
        ))
    }
    </ol>
  )
};

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired
};

BooksGrid.defaultProps = {
  books: []
};

export default BooksGrid;
