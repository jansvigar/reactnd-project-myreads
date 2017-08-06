import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SearchBooks from './components/SearchBooks/SearchBooks';
import ListBooks from './components/ListBooks/ListBooks';

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks />
        )} />
        <Route path="/search" render={() => (
          <SearchBooks />
        )} />
      </div>
    );
  };
}

export default BooksApp;
