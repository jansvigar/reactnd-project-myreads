import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SortBooks extends Component {
  render() {
    return (
      <div className="sort-books-wrapper">
        <div className="sort-books">
          <label>Sort by:</label>
          <select onChange={ e => this.props.handleSort(e.target.value) }>
            <option value='title_asc'>Title: A to Z</option>
            <option value='title_desc'>Title: Z to A</option>
            <option value='rating_desc'>Average Rating: Highest to Lowest</option>
            <option value='rating_asc'>Average Rating: Lowest to Highest</option>
          </select>
        </div>
      </div>
    );
  };
}

SortBooks.propTypes = {
  handleSort: PropTypes.func.isRequired
};

export default SortBooks;
