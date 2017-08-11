import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce } from '../../utils';

class SearchBox extends Component {
  state = {
    query: ''
  };

  componentWillMount() {
    this.handleSearchDebounced = debounce(() => {
      this.props.handleSearch(this.state.query);
    }, 500, this);
  };

  updateQuery = (query) => {
    this.setState({ query });
  }

  handleOnChange = (e) => {
    let inputValue = e.target.value;
    this.props.onClearSearch();
    this.updateQuery(inputValue);

    if(inputValue) {
      this.handleSearchDebounced();
    } else {
      this.handleSearchDebounced.cancel();
    }
  }

  render() {
    return (
      <input type="text"
          placeholder="Search by title or author"
          value={ this.state.query }
          onChange={ this.handleOnChange }
      />
    );
  };
}

SearchBox.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired
};

export default SearchBox;
