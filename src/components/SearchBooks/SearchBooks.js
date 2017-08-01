import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from '../BooksGrid/BooksGrid'
import './SearchBooks.css'

class SearchBooks extends Component {
  render() {
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search"
             onClick={() => this.props.onCloseSearch(false)}
          >Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid />
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  onCloseSearch: PropTypes.func.isRequired
}

export default SearchBooks
