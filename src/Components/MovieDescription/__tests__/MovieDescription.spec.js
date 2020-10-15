import React from 'react';

import {
  MovieDescription,
  MovieDescriptionGenre,
  MovieDescriptionTitle,
} from '../MovieDescription';

describe('<MovieDescription />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieDescription />);
  });

  it('should render a movie description', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #555;
        margin: 10px 0;
      }

      <div
        class="c0"
      />
    `);
  });
});

describe('<MovieDescriptionTitle />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieDescriptionTitle />);
  });

  it('should render a movie description ', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #555;
        margin: 10px 0;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      <div
        class="sc-AxjAm c0"
      />
    `);
  });
});

describe('<MovieDescriptionGenre />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieDescriptionGenre />);
  });

  it('should render a movie description genre', () => {
    expect(wrapper.render()).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #555;
        margin: 10px 0;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        font-size: 14px;
      }

      <div
        class="sc-AxjAm c0"
      />
    `);
  });
});
