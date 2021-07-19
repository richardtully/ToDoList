import { render, screen } from '@testing-library/react';
import InputField from './InputField'

xtest('renders input field', () => {
  render(<InputField />);
  const linkElement = screen.getByText(/Yet Another To Do List/i);
  expect(linkElement).toBeInTheDocument();
});