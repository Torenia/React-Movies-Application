import React from 'react';

import { MovieCardWrapper } from '../MovieCardWrapper';

describe('<MovieCardWrapper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieCardWrapper />);
  });

  it('should render a movie card wrapper', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        position: relative;
        margin: 25px 0;
        cursor: pointer;
      }

      <div
        class="c0"
      />
    `);
  });
});
