import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Markdown to PDF Converter heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Markdown to PDF Converter/i);
  expect(headingElement).toBeInTheDocument();
});
