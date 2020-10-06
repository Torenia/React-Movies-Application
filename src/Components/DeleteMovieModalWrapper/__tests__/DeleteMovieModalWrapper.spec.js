import React from 'react';

import { DeleteMovieModalWrapper } from '../DeleteMovieModalWrapper';

describe('<DeleteMovieModalWrapper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DeleteMovieModalWrapper />);
  });

  it('should render a movie modal wrapper', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
