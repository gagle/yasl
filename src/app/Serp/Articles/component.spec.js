import React from 'react';
import { shallow, mount } from 'enzyme';
import Articles from './component';
import { getArticles } from '../repository';

jest.mock('../repository', () => ({
  getArticles: jest.fn(() => [])
}));

describe('Articles', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render', () => {
    const wrapper = shallow(<Articles />);
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  test('should call getArticles', () => {
    mount(<Articles />);

    expect(getArticles).toHaveBeenCalledTimes(1);
  });
});
