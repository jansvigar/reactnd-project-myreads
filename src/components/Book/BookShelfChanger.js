import React from 'react';
import PropTypes from 'prop-types';
import * as Constants from '../../constants';
import { camelCase } from '../../utils';

const BookShelfChanger = props => (
  <div className="book-shelf-changer">
    <select
      value={ props.selectedShelf || 'none' }
      onChange={ e => props.handleOnChange(e.target.value) }
    >
      <option value="" disabled>Move to...</option>
      {
        Constants.SHELVES.map(shelf => (
          <option key={ shelf } value={ camelCase(shelf) }>
            { shelf }
          </option>
        ))
      }
      <option value="none">None</option>
    </select>
  </div>
);

BookShelfChanger.propTypes = {
  selectedShelf: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired
};

export default BookShelfChanger;
