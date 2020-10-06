import React from 'react';

import { Error } from '../Error';

describe('<Error />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Error />);
  });

  it('should render a error message', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #d10c0c;
        font-weight: bold;
      }

      <div
        class="c0"
      />
    `);
  });
});
