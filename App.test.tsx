import React from 'react';
import { render } from 'react-native-testing-library';
import App from './App';

it('renders without crashing', () => {
  const rendered = render(<App />);
  expect(rendered).toMatchSnapshot();
});
