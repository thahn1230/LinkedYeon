import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from './views/MainPage';

test('renders welcome message', () => {
  render(<MainPage />);
  const welcomeElement = screen.getByText(/환영합니다\./i);
  expect(welcomeElement).toBeInTheDocument();
});
