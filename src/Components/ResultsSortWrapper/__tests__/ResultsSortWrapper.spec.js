import React from 'react';

import { ResultsSortWrapper } from '../ResultsSortWrapper';

describe('<ResultsSortWrapper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultsSortWrapper />);
  });

  it('should render results sort wrapper', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
