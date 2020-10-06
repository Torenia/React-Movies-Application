import React from 'react';

import { ResultsMenuWrapper } from '../ResultsMenuWrapper';

describe('<ResultsMenuWrapper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultsMenuWrapper />);
  });

  it('should render a results menu wrapper', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      <div
        class="c0"
      />
    `);
  });
});
