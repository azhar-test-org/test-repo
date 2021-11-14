import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Alhamdullilah', () => {
  render(<App />);
  const linkElement = screen.getByText(/Alhamdullilah/i);
  expect(linkElement).toBeInTheDocument();
});
