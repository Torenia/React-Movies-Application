import React from 'react';

import { HeaderWrapper } from '../HeaderWrapper';

describe('<HeaderWrapper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HeaderWrapper />);
  });

  it('should render a header wrapper', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        position: absolute;
        top: 25px;
        left: 165px;
      }

      <div
        class="c0"
      />
    `);
  });
});
