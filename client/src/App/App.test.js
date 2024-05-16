import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders car name', async () => {
  render(<App />);
  const carNameElement = await screen.findByText(/car name/i); // Replace "car name" with the actual car name you expect
  expect(carNameElement).toBeInTheDocument();
});