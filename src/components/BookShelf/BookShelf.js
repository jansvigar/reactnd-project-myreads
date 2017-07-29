import React from 'react'
import PropTypes from 'prop-types'
import BooksGrid from '../BooksGrid/BooksGrid'

const BookShelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{ props.title }</h2>
    <div className="bookshelf-books">
      <BooksGrid books={ props.books } />
    </div>
  </div>
)

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
}

export default BookShelf
