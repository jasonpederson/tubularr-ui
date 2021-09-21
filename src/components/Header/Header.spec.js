import { render, screen } from '@testing-library/react';
import Header from './Header';

it('renders the Header', () => {
  render(<Header />);

  expect(screen.getByText('Tubularr')).toBeInTheDocument();
});