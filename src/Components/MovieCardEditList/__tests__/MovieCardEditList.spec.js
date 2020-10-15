import React from 'react';

import { MovieCardEditList } from '../MovieCardEditList';

describe('<MovieCardEditList />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieCardEditList />);
  });

  it('should render a movie card edit list', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
