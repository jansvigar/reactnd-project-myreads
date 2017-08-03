import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from '../BookShelf/BookShelf'
import './ListBooks.css'

const ListBooks = props => {
  const shelves = [
    'Currently Reading',
    'Want to Read',
    'Read'
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          { shelves.map( shelf => (
            <BookShelf key={ shelf }
                       title={ shelf }
                       books={ props.books.filter(book => book.shelf === shelf) }
            />
          )) }
        </div>
      </div>
      <div className="open-search">
        <a onClick={() => props.onOpenSearch(true)}>Add a book</a>
      </div>
    </div>
  )
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onOpenSearch: PropTypes.func.isRequired
}

export default ListBooks
