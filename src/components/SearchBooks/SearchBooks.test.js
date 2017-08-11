import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchBooks from './SearchBooks';
import SearchBox from './SearchBox';

const searchBoxProps = {
  handleSearch: jest.fn(),
  onClearSearch: jest.fn()
};

describe('<SearchBooks />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<SearchBooks />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('<SearchBox />', () => {
    it('should render correctly', () => {
      const wrapper = shallow(<SearchBox {...searchBoxProps} />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

});
