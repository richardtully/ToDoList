import { render, screen } from '@testing-library/react';
import Title from './title'

test('renders learn react link', () => {
  render(<Title />);
  const linkElement = screen.getByText(/Yet Another To Do List/i);
  expect(linkElement).toBeInTheDocument();
});