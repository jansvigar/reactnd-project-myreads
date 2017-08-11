import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Book from './Book';
import BookShelfChanger from './BookShelfChanger'

const bookProps = {
  book: {
    id: 'id.123',
    imageLinks: {},
    title: 'Test Title',
    authors: ['author 1', 'author 2'],
    averageRating: 5,
    shelf: 'Test Shelf'
  }
};

const handleOnChange = jest.fn();

const bookShelfChangerProps = {
  selectedShelf: 'Test Shelf',
  handleOnChange: handleOnChange
}

describe('<Book />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Book {...bookProps} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('<BookShelfChanger />', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<BookShelfChanger {...bookShelfChangerProps} />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

});
