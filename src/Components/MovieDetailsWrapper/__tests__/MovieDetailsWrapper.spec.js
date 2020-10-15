import React from 'react';

import { MovieDetailsWrapper } from '../MovieDetailsWrapper';

describe('<MovieDetailsWrapper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieDetailsWrapper />);
  });

  it('should render a movie details wrapper', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
