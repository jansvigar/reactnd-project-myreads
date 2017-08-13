import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';
import Rating from '../Rating/Rating'
import * as BooksAPI from '../../BooksAPI';
import './Book.css';

class Book extends Component {
  state = {
      shelf: ''
  };

  componentDidMount() {
    if(this.props.book.shelf) {
      this.setState({ shelf: this.props.book.shelf });
    } else {
      BooksAPI
        .get(this.props.book.id)
        .then(book =>
          this.setState({ shelf: book.shelf })
        );
    }
  };

  handleOnChange = (selectedValue) => {
    BooksAPI.update(this.props.book, selectedValue).then((data) => {
      this.setState({ shelf: selectedValue });
      this.props.updateShelvedBooksList
        && this.props.updateShelvedBooksList();
    });
  };

  render(){
    const bookCoverStyles = {
      width: 128,
      height: 193,
      backgroundImage: `url(${this.props.book.imageLinks
                              && this.props.book.imageLinks.thumbnail})`
    };

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={ bookCoverStyles }></div>
          <BookShelfChanger
            selectedShelf={ this.state.shelf }
            handleOnChange={ this.handleOnChange }
          />
        </div>
        <div className="book-rating">
          <Rating number={ this.props.book.averageRating } />
        </div>
        <div className="book-title">{ this.props.book.title || 'Unknown Title' }</div>
        <div className="book-authors">
          { this.props.book.authors && this.props.book.authors.length > 0
              ? this.props.book.authors.reduce((acc, cur) => `${acc}, ${cur}`)
              : 'Unknown Author' }
        </div>
      </div>
    );
  };
}

Book.propTypes = {
  book: PropTypes.shape ({
    id: PropTypes.string.isRequired,
    imageLinks: PropTypes.object,
    title: PropTypes.string,
    authors: PropTypes.array,
    averageRating: PropTypes.number,
    shelf: PropTypes.string
  })
};

export default Book;
