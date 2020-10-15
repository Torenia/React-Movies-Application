import React from 'react';

import { MovieReleaseDate } from '../MovieReleaseDate';

describe('<MovieReleaseDate />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieReleaseDate />);
  });

  it('should render a movie release date', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        border: 1px solid #555;
        border-radius: 3px;
        color: #555;
        padding: 2px 10px;
        font-weight: bold;
      }

      <div
        class="c0"
      />
    `);
  });
});
