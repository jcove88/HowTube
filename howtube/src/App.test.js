import { render, screen } from '@testing-library/react';
import App from './App';

const sum = require('./sum');

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});
