import React from 'react';

import { SearchButton } from '../SearchButton';

describe('<SearchButton />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchButton />);
  });

  it('should render a search button', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
