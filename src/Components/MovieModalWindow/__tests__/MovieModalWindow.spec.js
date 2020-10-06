import React from 'react';

import { MovieModalWindow } from '../MovieModalWindow';

describe('<MovieModalWindow />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieModalWindow />);
  });

  it('should render a movie modal window', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        z-index: 1;
      }

      <div
        class="c0"
      />
    `);
  });
});
