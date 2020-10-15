import React from 'react';

import { AddEditMovieFormRow } from '../AddEditMovieFormRow';

describe('<AddEditMovieFormRow />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddEditMovieFormRow />);
  });

  it('should render a movie form row', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
