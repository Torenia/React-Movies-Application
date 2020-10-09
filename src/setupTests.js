import '@babel/polyfill';

import React from 'react';
import Enzyme, { mount, shallow, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { renderHook, act } from '@testing-library/react-hooks';
import { describe, it, beforeEach, test, afterEach } from '@jest/globals';
import '@testing-library/jest-dom';

import 'jest-styled-components';

global.React = React;
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.renderHook = renderHook;
global.act = act;
global.describe = describe;
global.it = it;
global.beforeEach = beforeEach;
global.test = test;
global.afterEach = afterEach;

global.$ = jest.fn().mockImplementation(() => ({
  trigger: jest.fn(),
}));

console.error = () => {};

Enzyme.configure({ adapter: new EnzymeAdapter() });
