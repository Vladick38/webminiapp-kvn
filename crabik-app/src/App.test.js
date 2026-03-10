import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('navbar button switches to settings page', () => {
  render(<App />);

  expect(screen.getByText(/settings & security/i)).toBeInTheDocument();

  const settingsBtn = screen.getByRole('button', { name: /settings/i });
  fireEvent.click(settingsBtn);
  expect(screen.getByText(/settings & security/i)).toBeInTheDocument();
});
