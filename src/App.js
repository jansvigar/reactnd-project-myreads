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
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({ books });
    });
  }

  updateShowSearchPage = (showSearchPage) => {
    this.setState({ showSearchPage });
  };

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
  };
}

export default BooksApp
