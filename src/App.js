import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks/SearchBooks'
import ListBooks from './components/ListBooks/ListBooks'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
    /**
    * TODO: Don't forget to empty this books state. Hardcoded the object to test book component.
    */
    books: [{
      id: '1',
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      backgroundImageUrl: 'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api',
      shelf: 'Currently Reading'
    }]
  };

  updateShowSearchPage = (showSearchPage) => {
    this.setState({ showSearchPage });
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks onCloseSearch={ this.updateShowSearchPage } books={ this.state.books }/>
        ) : (
          <ListBooks onOpenSearch={ this.updateShowSearchPage } books={ this.state.books } />
        )}
      </div>
    )
  }
}

export default BooksApp
