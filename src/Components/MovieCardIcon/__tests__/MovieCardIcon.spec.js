import React from 'react';

import { MovieCardIcon } from '../MovieCardIcon';

describe('<MovieCardIcon />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieCardIcon />);
  });

  it('should render a movie card icon', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
