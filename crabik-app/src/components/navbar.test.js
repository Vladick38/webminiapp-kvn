import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Navbar from './navbar';

describe('Navbar component', () => {
  test('renders settings button and calls onSelect when clicked', () => {
    const handleSelect = jest.fn();
    render(<Navbar onSelect={handleSelect} current="" />);

    const btn = screen.getByRole('button', { name: /settings/i });
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    expect(handleSelect).toHaveBeenCalledWith('settings');
  });

  test('active class toggles based on current prop', () => {
    const { rerender } = render(
      <Navbar onSelect={() => {}} current="settings" />
    );
    let btn = screen.getByRole('button', { name: /settings/i });
    expect(btn).toHaveClass('active');

    rerender(<Navbar onSelect={() => {}} current="other" />);
    btn = screen.getByRole('button', { name: /settings/i });
    expect(btn).not.toHaveClass('active');
  });
});
