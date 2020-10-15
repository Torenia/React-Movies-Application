import React from 'react';

import { Wrapper, ErrorBoundaryWrapper } from '../Wrapper';

describe('<Wrapper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Wrapper />);
  });

  it('should render wrapper', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<ErrorBoundaryWrapper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ErrorBoundaryWrapper />);
  });

  it('should render error boundar wrapper', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
