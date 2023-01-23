import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const elem = screen.getByText(/Delivery Fee Calculator/i);
  expect(elem).toBeInTheDocument();
});
