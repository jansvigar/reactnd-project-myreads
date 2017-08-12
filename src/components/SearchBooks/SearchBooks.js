import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import { removeDuplicates, sort } from '../../utils';
import BooksGrid from '../BooksGrid/BooksGrid';
import SearchBox from './SearchBox';
import SortBooks from './SortBooks';
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
        this.handleSort('title_asc');
      }
    });
  };

  handleSort = (sortBy) => {
    const sortBooksBy = sort(this.state.books);
    const sortedBooksByTitle = sortBooksBy('title');
    const sortedBooksByRating = sortBooksBy('averageRating');
    let sortedBooks = [];

    switch(sortBy) {
      case 'title_asc':
        sortedBooks = sortedBooksByTitle;
        break;
      case 'title_desc':
        sortedBooks = sortedBooksByTitle.reverse();
        break;
      case 'rating_asc':
        sortedBooks = sortedBooksByRating;
        break;
      case 'rating_desc':
        sortedBooks = sortedBooksByRating.reverse();
        break;
      default:
        break;
      }

      this.setState({ books: sortedBooks });
  }

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
          { this.state.books.length > 0 && (
              <div>
                <SortBooks handleSort={ this.handleSort } />
                <BooksGrid books={ this.state.books } />
              </div>
            )
          }
        </div>
      </div>
    );
  };
}

export default SearchBooks;
