import { render, screen } from '@testing-library/react';
import App from './App';

test('renders About section heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /about/i });
  expect(heading).toBeInTheDocument();
});
