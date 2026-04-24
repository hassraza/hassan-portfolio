import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/welcome to my portfolio/i);
  expect(headingElement).toBeInTheDocument();
});
