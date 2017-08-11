import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BookShelf from './BookShelf';

const props = {
  title: 'Book Shelf Title',
  books: [{id:'id', shelf:'testShelf'}]
}

describe('<BookShelf />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<BookShelf {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
