import React from 'react';

import { MovieSearchWrapper } from '../MovieSearchWrapper';

describe('<MovieSearchWrapper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieSearchWrapper />);
  });

  it('should render a movie search wrapper', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
