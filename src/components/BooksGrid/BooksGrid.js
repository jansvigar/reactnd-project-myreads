import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';
import './BooksGrid.css';

const BooksGrid = props => (
    <ol className="books-grid">
    {
        props.books.map( book => (
            <Book key={ book.id } book={ book } />
        ))
    }
    </ol>
);

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired
};

BooksGrid.defaultProps = {
  books: []
};

export default BooksGrid;
