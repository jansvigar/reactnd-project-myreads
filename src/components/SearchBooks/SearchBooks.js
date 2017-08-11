import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import { removeDuplicates } from '../../utils';
import BooksGrid from '../BooksGrid/BooksGrid';
import SearchBox from './SearchBox';
import './SearchBooks.css';

class SearchBooks extends Component {
  state = {
    books: []
  };

  handleSearch = (query) => {
    BooksAPI.search(query).then(books => {
      if(!books.error) {
        let uniqueBooks = removeDuplicates(books, 'id');
        this.setState({ books: uniqueBooks });
      }
    });
  };

  clearBooks = () => {
    this.setState({ books: [] });
  }

  render() {
    return (
        <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <SearchBox
              handleSearch={ this.handleSearch }
              onClearSearch={ this.clearBooks }
            />
          </div>
        </div>
        <div className="search-books-results">
          { this.state.books.length > 0 &&
            <BooksGrid books={ this.state.books } />
          }
        </div>
      </div>
    );
  };
}

export default SearchBooks;
