import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from '../Book/Book'
import escapeRegExp from 'escape-string-regexp'
import './BooksGrid.css'

class BooksGrid extends Component {
  state = {
    query: ''
  }

  render() {
    let showingBooks;
    showingBooks = this.state.query ? this.props.books.filter(filterBooks.bind(this))
                                    : this.props.books;

    return (
      <ol className="books-grid">
        {
          showingBooks.map( book => (
              <Book key={ book.id } book={ book } />
          ))
        }
      </ol>
    )
  };
}

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired
};

BooksGrid.defaultProps = {
  books: []
};

/**
* @description Check if a book match search query or shelf type
* @param {object} book
* @returns {boolean}
*/
function filterBooks(book) {
  const match = new RegExp(escapeRegExp(this.state.query), 'i');
  return match.test(book.title);
}

export default BooksGrid
