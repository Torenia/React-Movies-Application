import React from 'react';

import { FooterWrapper } from '../FooterWrapper';

describe('<FooterWrapper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FooterWrapper />);
  });

  it('should render a footer wrapper', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        background-color: #424242;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 15px;
      }

      <div
        class="c0"
      />
    `);
  });
});
