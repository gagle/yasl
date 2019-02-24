import React from 'react';
import { shallow } from 'enzyme';
import Article from './component';

describe('Article', () => {
  test('should render', () => {
    const wrapper = shallow(<Article />);
    expect(wrapper).toMatchSnapshot();
  });
});
