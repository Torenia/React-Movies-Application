import React from 'react';

import { LogoFirstPart, LogoSecondPart } from '../LogoParts';

describe('<LogoFirstPart />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LogoFirstPart />);
  });

  it('should render first logo part', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        font-weight: bold;
        color: #f65261;
      }

      <span
        class="c0"
      />
    `);
  });
});

describe('<LogoSecondPart />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LogoSecondPart />);
  });

  it('should render first second part', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        font-weight: bold;
        color: #f65261;
        font-weight: normal;
      }

      <span
        class="sc-AxjAm c0"
      />
    `);
  });
});
