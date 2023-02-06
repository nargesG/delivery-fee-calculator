import { render, screen } from '@testing-library/react';
import FeeCalculator from './FeeCalculator';

describe('Fee Calculator', () => {
  test('should render FeeCalculator', () => {
    render(<FeeCalculator />);
    const elem = screen.getByText('Calculate');
    expect(elem).toBeInTheDocument();
  });
});