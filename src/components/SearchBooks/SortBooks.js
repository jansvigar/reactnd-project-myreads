import React from 'react';
import PropTypes from 'prop-types';

const SortBooks = ({ handleSort }) => (
  <div className="sort-books-wrapper">
    <div className="sort-books">
      <label>Sort by:</label>
      <select onChange={ e => handleSort(e.target.value) }>
        <option value='title_asc'>Title: A to Z</option>
        <option value='title_desc'>Title: Z to A</option>
        <option value='rating_desc'>Average Rating: Highest to Lowest</option>
        <option value='rating_asc'>Average Rating: Lowest to Highest</option>
      </select>
    </div>
  </div>
)


SortBooks.propTypes = {
  handleSort: PropTypes.func.isRequired
};

export default SortBooks;
