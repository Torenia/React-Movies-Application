import React from 'react';

import { MovieDetailsDescription } from '../MovieDetailsDescription';

describe('<MovieDetailsDescription />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieDetailsDescription />);
  });

  it('should render a movie details description', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
