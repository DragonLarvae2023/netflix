import { render, screen } from '@testing-library/react';
import App from './App';
import { TextDecoder, TextEncoder } from "util";
global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;

test('renders learn react link', () => {
  render(<App />);

});
