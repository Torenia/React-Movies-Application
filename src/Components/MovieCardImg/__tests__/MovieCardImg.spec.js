import React from 'react';

import { MovieCardImg } from '../MovieCardImg';

describe('<MovieCardImg />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieCardImg />);
  });

  it('should render a movie card image', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        width: 300px;
        height: 455px;
      }

      <div
        class="c0"
      />
    `);
  });
});
