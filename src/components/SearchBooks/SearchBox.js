import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBox extends Component {
  state = {
    query: ''
  };

  componentWillMount() {
    this.handleSearchDebounced = debounce(() => {
      this.props.handleSearch(this.state.query);
    }, 1000);
  };

  updateQuery = (query) => {
    this.setState({ query });
  }

  onChange = (e) => {
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
          onChange={ this.onChange }
      />
    );
  };
}

SearchBox.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired
}

function debounce(callback, wait, context = this) {
  let timeout;
  function debounced(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  }

  debounced.cancel = () => {
    if(timeout !== undefined) {
      clearTimeout(timeout);
    }
  };

  return debounced;
}

export default SearchBox;
