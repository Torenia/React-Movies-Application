import React from 'react';

import { MoviesListWrapper, MoviesResultsWrapper } from '../MoviesWrapper';

describe('<MoviesListWrapper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MoviesListWrapper />);
  });

  it('should render a movies wrapper', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<MoviesResultsWrapper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MoviesResultsWrapper />);
  });

  it('should render a movies results wrapper', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
