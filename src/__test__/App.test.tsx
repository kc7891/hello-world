import React from 'react';
import ReactDOM from 'react-dom';
import App, { sampleFunc } from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('toBe example', () => {
  test('equal 2', () => {
    expect( sampleFunc(1) ).toBe(2)
  })
})