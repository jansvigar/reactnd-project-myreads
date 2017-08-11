import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import BookShelf from '../BookShelf/BookShelf';
import * as Constants from '../../constants'
import { camelCase } from '../../utils'
import './ListBooks.css';

class ListBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.updateShelvedBooksList();
  };

  updateShelvedBooksList = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              { Constants.SHELVES.map( shelf => (
                <BookShelf key={ shelf }
                           title={ shelf }
                           books={ this.state.books.filter(book =>
                             book.shelf === camelCase(shelf))
                           }
                           updateShelvedBooksList={ this.updateShelvedBooksList }
                />
              )) }
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      );
  };
}

export default ListBooks;
