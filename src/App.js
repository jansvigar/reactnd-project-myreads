import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SearchBooks from './components/SearchBooks/SearchBooks';
import ListBooks from './components/ListBooks/ListBooks';

const BooksApp = () => (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks />
        )} />
        <Route path="/search" render={() => (
          <SearchBooks />
        )} />
      </div>
);

export default BooksApp;
