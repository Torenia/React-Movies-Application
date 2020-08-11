import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { TestComponent } from '../TestComponent';
import { expect, describe, it } from '@jest/globals';

const { configure, shallow } = require('enzyme');

configure({ adapter: new Adapter() });

describe('<TestComponent />', () => {

  it('should render title', () => {
    let wrapper = shallow(<div><h2 className='title'>React Movies Application</h2></div>);
    const title = wrapper.find('.title');
    expect(title.text()).toEqual('React Movies Application');
  });

});
