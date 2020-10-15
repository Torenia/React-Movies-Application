import React from 'react';

import { MovieModalHeader } from '../MovieModalHeader';

describe('<MovieModalHeader />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieModalHeader />);
  });

  it('should render a movie details header', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
