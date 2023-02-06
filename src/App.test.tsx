import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should render App', () => {
    render(<App />);
    const elem = screen.getByText('Delivery Fee Calculator');
    expect(elem).toBeInTheDocument();
  });
});
