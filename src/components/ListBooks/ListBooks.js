import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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
                       books={ props.books.filter(book => book.shelf === camelCase(shelf)) }
            />
          )) }
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired
}

function camelCase(str) {
  return str.trim()
            .toLowerCase()
            .replace(/\W+(.)/g, function(match, char){
              return char.toUpperCase();
            });
}

export default ListBooks
