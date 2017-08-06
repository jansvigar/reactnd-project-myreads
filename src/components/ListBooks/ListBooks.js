import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import BookShelf from '../BookShelf/BookShelf';
import './ListBooks.css';

const shelves = [
  'Currently Reading',
  'Want to Read',
  'Read'
];

class ListBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  };

  render() {
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
                           books={ this.state.books.filter(book =>
                             book.shelf === camelCase(shelf))
                           }
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

function camelCase(str) {
  return str.trim()
            .toLowerCase()
            .replace(/\W+(.)/g, function(match, char){
              return char.toUpperCase();
            });
}

export default ListBooks;
