import React from 'react';

import { SearchBox } from '../SearchBox';

describe('<SearchBox />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchBox />);
  });

  it('should render a search box', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
