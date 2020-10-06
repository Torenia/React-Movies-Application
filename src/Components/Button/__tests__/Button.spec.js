import React from 'react';

import { Button, ResetButton } from '../Button';

describe('<Button />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  it('should render a button', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        color: #fff;
        background-color: #f65261;
        font-size: 15px;
        text-transform: uppercase;
        border: none;
        border-radius: 5%;
        outline: none;
        cursor: pointer;
        padding: 10px 20px;
        margin-right: 80px;
        width: 160px;
      }

      <button
        class="c0"
      />
    `);
  });
});

describe('<ResetButton />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResetButton />);
  });

  it('should render a reset button', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        color: #fff;
        background-color: #f65261;
        font-size: 15px;
        text-transform: uppercase;
        border: none;
        border-radius: 5%;
        outline: none;
        cursor: pointer;
        padding: 10px 20px;
        margin-right: 80px;
        width: 160px;
        background-color: #232323;
        color: #f65261;
        border: 1px solid #f65261;
      }

      <button
        class="sc-AxjAm c0"
      />
    `);
  });
});
