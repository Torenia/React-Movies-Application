import React from 'react';

import { ResultsFilterWrapper } from '../ResultsFilterWrapper';

describe('<ResultsFilterWrapper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultsFilterWrapper />);
  });

  it('should render result filter wrapper', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
