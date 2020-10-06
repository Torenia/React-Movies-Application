import React from 'react';

import { EmptyResultStateWrapper } from '../EmptyResultStateWrapper';

describe('<EmptyResultStateWrapper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EmptyResultStateWrapper />);
  });

  it('should render an empty result state wrapper', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
