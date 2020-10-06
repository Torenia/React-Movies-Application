import React from 'react';

import { NotFoundWrapper } from '../NotFoundWrapper';

describe('<NotFoundWrapper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotFoundWrapper />);
  });

  it('should render a not found wrapper', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
