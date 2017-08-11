import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ListBooks from './ListBooks';

describe('<ListBooks />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ListBooks />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
