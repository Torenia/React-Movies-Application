import React from 'react';

import { ResultCountNumber, ResultCountText } from '../ResultCountWrapper';

describe('<ResultCountNumber />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultCountNumber />);
  });

  it('should render a result count number', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        color: #fff;
        font-weight: bold;
      }

      <span
        class="c0"
      />
    `);
  });
});

describe('<ResultCountText />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultCountText />);
  });

  it('should render a result count text', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        color: #fff;
        font-weight: bold;
        font-weight: normal;
      }

      <span
        class="sc-AxjAm c0"
      />
    `);
  });
});
