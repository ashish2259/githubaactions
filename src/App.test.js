import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn reanfjbjkbsdjkjkjct link one', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn reaceet link one', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

